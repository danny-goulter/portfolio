import './App.css';
import Home from "./Home"
import Header from './Header';
import Footer from "./Footer"
import Projects from './Projects';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer /> 
      </header>   
    </div>
  );
}

export default App;
