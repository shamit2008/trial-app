import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [website, setWebsite] = useState('www.google.com');
  const [websiteSafety, setSafety] = useState(0); // scale from 0-100 or something

  const displayInfo = () => {
    // use website state to read csv file and get the info
    // set the websiteSafety state with that value
    // setSafety()
  }

  const handleSubmit = (event) => {
    console.log(event.target.value);
    setWebsite(event.target.value); // 1.
    // displayInfo(website)
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{website}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
          </label>
          <input />
          <input type="submit" value="Submit" />  {/* look into using forms/inputs with useState, google inputs and useState and there should tutorials */}
        </form>
        {
        /* 1. have this form, 2. when the form submits, call a handleSubmit function to update the state, 3. in that function, call a function for displaying webite info */}
        {/* 
        <button onClick = {() => setWebsite('www.bing.com')}>Click Me!</button>
        <button onClick = {() => setWebsite('www.yahoo.com')}>No, click me!</button> */}

        <p>{website}'s safety score: {websiteSafety}</p> {/* style this is css */}
      </header>
    </div>
  );
}

export default App;

// React Router - have more than one page to your app, tutorials online
// Turn your excel file into CSV, readd that file into this project
// Styling, functionality
