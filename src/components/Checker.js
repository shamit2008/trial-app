import React, {useState, useEffect} from 'react';
import Papa from "papaparse";
import dangerous from "./dangerous.csv"; 
import half from "./half.csv";

function Checker() {
  const [website, setWebsite] = useState('www.google.com');
  const [displayName, setDisplay] = useState('www.google.com');
  const [websiteDanger, setDanger] = useState(0); // scale from 0-100 or something
  const [resultStyle, setstyle] = useState({color: 'green', fontSize: 40, textAlign:'center'});
  const [dangerousCSV, setDangerous] = useState(null);
  const [halfCSV, setHalf] = useState(null);

  useEffect(() =>  {
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
        setDanger(10);
        websiteFound = true;
      }
    });

    halfCSV.map((hWebsite) =>{
      if (hWebsite[0] === website){
        setDanger(5);
        websiteFound = true;
      }    
    });

    if (!websiteFound){
      

      setDanger(0);
    }
    
    
    let isolatedWebsite = (website.substring(4, website.length-4));
    console.log(isolatedWebsite);
    console.log(website);

    if (websiteDanger === 0){
      setstyle({color: 'green', fontSize: 40, textAlign:'center'});
    }
    else if (websiteDanger === 5){
      setstyle({color: 'blue', fontSize: 40, textAlign:'center'});
    }
    else if (websiteDanger === 10 || websiteDanger === -1){
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
        <a>
          
        </a>
        <h3>Website security</h3>
        <a href src = "www.hi.com"></a>
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

        <p style={resultStyle}>{displayName}'s danger score: {websiteDanger}</p> {/* style this is css */}
      </header>
    </div>
  );
}


export default Checker;
