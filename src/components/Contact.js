import React from 'react';
import {Link} from "react-router-dom";

function Contact() {

  return (
    <div className="App">
      <header className="App-header">
        <a>
          
        </a>
        <h3>Contact Us</h3>
       
        <Link to="/mail">Click Me</Link>
        <p> Hi </p>
        <p>Contact us for more info</p>
      </header>
    </div>
  );
}


export default Contact;

