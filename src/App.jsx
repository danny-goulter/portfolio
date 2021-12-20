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
          Danny Goulter =&gt; Creative Thinker / Web Developer
        </h1>
          <img onClick={playScratch} src="record.png"  className="App-logo" alt="spinning record" />
            <section className="sections">
              <h2>Projects</h2>
              <h2>Bio</h2>
              <h2>Contact</h2>
            </section>
      </header>    
    </div>
  );
}

export default App;
