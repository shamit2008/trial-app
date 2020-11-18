import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [website, setWebsite] = useState('www.google.com');
  const [websiteSafety, setSafety] = useState(0); // scale from 0-100 or something
  const [resultstyle, setstyle] = useState("color: 'red', fontSize: 40, textAlign:'center'" );
  const displayInfo = () => {
    // use website state to read csv file and get the info
    // set the websiteSafety state with that value
    // setSafety()
  }

  const handleSubmit = (evt) => {
    evt.preventDefault(); // prevent function misfires
    alert(`Calculating Score for ${website}`)
    displayInfo(); // calling the function to calculate
    resultStyle = {
      color: 'blue', fontSize: 40, textAlign:"center",visibility: "visible"
    }
  }

  let resultStyle = {
    color: 'red', fontSize: 40, textAlign:"center" 
  }
  return (

    <div className="App">
      <header className="App-header">
        <h3>Website security</h3>

        <form onSubmit={handleSubmit}> {/* when you click submit, this will call handleSubmit */}
          <label>
            Website Name: 
            <input
              type="text"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p style={resultStyle}>{website}'s safety score: {websiteSafety}</p> {/* style this is css */}
      </header>
    </div>
  );
}


export default App;
// hw:
  // 1. look up tutorials on reading csv files with javascript + react - probably need useEffect hook
  // 2. look up some stuff with CSS to make the first page look better
 
  // next week: csv file, react router 


// Later:
// React Router - have more than one page to your app, tutorials online
// Turn your excel file into CSV, readd that file into this project
// Styling, functionality
