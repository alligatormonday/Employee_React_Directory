import './App.css';
import API from "./utils/API.js";
import { Component } from "react";
import Container from "./components/Container.js";
import Navbar from "./components/Navbar.js";
import Table from "./components/Table.js";
import TableContent from "./components/TableContent.js";

class App extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    API.getTeam()
    .then(res => {
      this.setState({results: res.data.results})
    }).catch(error => { console.log(error) })
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container>
          <Table>
            {this.state.results.map((result, i) => (
            <TableContent name={result.name.first} number={i} email={result.email} phone={result.phone} picture={result.picture.large} >
            </TableContent>
            ))}
          </Table>
        </Container>
      </div>
    )
  }
}

export default App;
