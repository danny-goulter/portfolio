// import logo from './logo.svg';
import './App.css';

function App() {
  const scratch = new Audio('recordScratch.wav')

  function playScratch() {
    scratch.play()
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="record.png" onClick={playScratch()} className="App-logo" alt="spinning record" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;