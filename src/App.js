import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Papa from "papaparse";
import dangerous from "./dangerous.csv"; 


function App() {
  const [website, setWebsite] = useState('www.google.com');
  const [websiteSafety, setSafety] = useState(0); // scale from 0-100 or something
  const [resultstyle, setstyle] = useState("color: 'red', fontSize: 40, textAlign:'center'" );
  const [dangerousCSV, setDangerous] = useState(null);

  useEffect(() => {
    Papa.parse(dangerous, {
      download: true,
      complete: function(results){
        setDangerous(results.data); // dangerousCSV = an array of arrays, dangerousCSV[index][0]
        console.log(dangerousCSV);
      }
    })
  }, []); // [] means that this useEffect will not repeat

  const displayInfo = () => {
    // check 'website' against all elements in 'dangerousCSV'
      // map or a loop
    // based on that result, do 'setSafety' 0-10
    // based on 'websitesafety', change the styling
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
