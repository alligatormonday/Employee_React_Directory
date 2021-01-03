
import './App.css';
import API from "./utils/API.js";


const myTeam = [{
  name: "Past Joseph",
  age: 29,
  role: "Not a web developer",
},
{
  name: "Current Joseph",
  age: 30,
  role: "Junior Developer",
},
{
  name: "Future Joseph",
  age: 40,
  role: "Master Developer",
}]

// potential 'for each loop' out-putting HTML (JSX) row of table

function App() {





  return (
    <>
      <h1>
        Employee Directory
    </h1>
      <div> 
        {myTeam.forEach(element => console.log(element))
        
        }
      </div>
    </>
  );
}

export default App;
