import './App.css';

function App() {
  const scratch = new Audio("recordScratch.wav")

  function playScratch() {
    console.log('this function runs')
    return scratch.play()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Danny Goulter - Creative Thinker / Web Developer
        </h1>
          <img onClick={playScratch} src="record.png"  className="App-logo" alt="spinning record" />
      </header>
    </div>
  );
}

export default App;
