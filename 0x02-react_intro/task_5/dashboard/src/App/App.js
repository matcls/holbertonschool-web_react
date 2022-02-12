import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import holberton_logo from "../assets/holberton_logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to acess the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' />
        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' />
        <button>OK</button>
      </div>

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
