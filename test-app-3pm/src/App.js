import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import './widgetsdk-min';

function App() {

  useEffect(() => {
    async function initialise () {
      const createrPromise= await window.ZOHO.CREATOR.init();
      console.log(createrPromise)
      const recordOperations =window.ZOHO.CREATOR.API; // this is the promise

       // and I'm parsing it to my context API object to re-use it for every API call
       console.log(recordOperations)
    }
    initialise ();


    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi, it's Chris Jenkins. Bro stop working. This is new new vesion. 
        </a>
      </header>
    </div>
  );
}

export default App;
