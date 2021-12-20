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
        <img onMouseOver={playScratch} src="record.png"  className="App-logo" alt="spinning record" />
        <p>
          Danny Goulter - Creative Thinker / Web Developer
        </p>
     
      </header>
    </div>
  );
}

export default App;
