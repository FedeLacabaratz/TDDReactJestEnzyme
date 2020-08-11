import React from 'react';
import logo from './logo.svg';
import './App.css';

// Función pura
export const handleClick = x => {
  return x + 2
}

// Función impura
export const fetchUser = async () => {
  const result = await fetch('/users')
  const user = await result.json()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleClick} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
