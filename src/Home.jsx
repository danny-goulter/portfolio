import './App.css';

function Home() {
  const scratch = new Audio("recordScratch.wav")

  function playScratch() {
    console.log('this function runs')
    return scratch.play()
  }

return (
  <div className="App">
    <img onClick={playScratch} src="record.png"  className="App-logo" alt="spinning record" />
  </div>                    
  );
}

export default Home