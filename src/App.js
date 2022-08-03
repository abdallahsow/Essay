import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React's app logo" />
        <p>
          Break the coding interview with React.
        </p>
        <a
          className="App-link"
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >

          It starts here 
        </a>
      </header>
    </div>
  );
}

export default App;
