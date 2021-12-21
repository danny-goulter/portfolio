import './App.css';
import Home from "./Home"
import Header from './Header';
import Footer from "./Footer";
import Contact from './Contact';
import Cv from './Cv';
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
          <Route path="/Cv" element={<Cv />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer /> 
      </header>   
    </div>
  );
}

export default App;
