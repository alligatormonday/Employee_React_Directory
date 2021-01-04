import './App.css';
import Container from "./components/Container.js";
import Navbar from "./components/Navbar.js";
import Table from "./components/Table.js";
import API from "./utils/API"
import React, { useState, useEffect } from "react"
import TableContent from "./components/TableContent.js"


function App() {
  // Getter and Setter for results & search
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")

  // API call and setting the results to the API call, empty array makes this equivalent to componentOnMount
  useEffect(() => {
    API.getTeam().then(res => setResults(res.data.results))
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <input type="text" className='searchBar' value={search} onChange={(event) => { setSearch(event.target.value) }}>
        </input>
        <Table>
          {search.length < 1 ? results.map((result, i) => (
            <TableContent
              name={result.name.first + " " + result.name.last}
              number={i}
              email={result.email}
              phone={result.phone}
              picture={result.picture.large} >
            </TableContent>
          )) :
            results.map((result, i) => {
              if (result.name.first.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <TableContent
                    name={result.name.first + " " + result.name.last}
                    number={i}
                    email={result.email}
                    phone={result.phone}
                    picture={result.picture.large} >
                  </TableContent>)
              }
            })
          }
        </Table>
      </Container>
    </div>
  )
}

export default App;
