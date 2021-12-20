import { Link } from "react-router-dom"
import './App.css';

function Footer () {
  return (
    <section className="sections">
        <Link to="/projects"><h2>Projects</h2></Link>
        <h2>Bio</h2>
        <h2>Contact</h2>
    </section>
  )
}

export default Footer