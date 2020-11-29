import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Papa from "papaparse";
import dangerous from "./dangerous.csv"; 
import half from "./half.csv";


function App() {
  const [website, setWebsite] = useState('www.google.com');
  const [displayName, setDisplay] = useState('www.google.com');
  const [websiteSafety, setSafety] = useState(0); // scale from 0-100 or something
  const [resultStyle, setstyle] = useState({color: 'green', fontSize: 40, textAlign:'center'});
  const [dangerousCSV, setDangerous] = useState(null);
  const [halfCSV, setHalf] = useState(null);

  useEffect(() => {
    Papa.parse(dangerous, {
       download: true,
       complete: function(results){
         setDangerous(results.data); // dangerousCSV = an array of arrays, dangerousCSV[index][0]
         console.log(dangerousCSV);
       }
     })
    Papa.parse(half, {
      download: true,
      complete: function(results){
        setHalf(results.data); // dangerousCSV = an array of arrays, dangerousCSV[index][0]
        console.log(halfCSV);
      }
    })
  }, []); // [] means that this useEffect will not repeat

  const displayInfo = () => {
    setDisplay(website);
    // check which array website is in
    let websiteFound = false;

    
    
    dangerousCSV.map((dWebsite) => {
      if (dWebsite[0] === website){
        setSafety(10);
        websiteFound = true;
      }
    });

    halfCSV.map((hWebsite) =>{
      if (hWebsite[0] === website){
        setSafety(5);
        websiteFound = true;
      }    
    });

    if (!websiteFound){
      

      setSafety(-1);
    }

    if (websiteSafety === 0){
      setstyle({color: 'green', fontSize: 40, textAlign:'center'});
    }
    else if (websiteSafety === 5){
      setstyle({color: 'blue', fontSize: 40, textAlign:'center'});
    }
    else if (websiteSafety === 10 || websiteSafety === -1){
      setstyle({color: 'red', fontSize: 40, textAlign:'center'});
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault(); // prevent function misfires
    //alert(`Calculating Score for ${website}`)
    displayInfo(); // calling the function to calculate
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

        <p style={resultStyle}>{displayName}'s safety score: {websiteSafety}</p> {/* style this is css */}
      </header>
    </div>
  );
}


export default App;
// hw:
  // 1. upload a safeCSV, add a map for it in displayInfo
  // 2. look into react-router
    // make a navigation button on this page


// Later:
// submitting takes 2 times to get the correct style state
// React Router - have more than one page to your app, tutorials online
// parse website input for better results
