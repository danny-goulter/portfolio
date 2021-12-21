import { Link } from "react-router-dom"
import './App.css';

function Footer () {
  return (
    <section className="sections">
        <Link to="/projects"><h2>Projects</h2></Link>
        <Link to="/cv"><h2>CV</h2></Link>
        <Link to="/contact"><h2>Contact</h2></Link>
    </section>
  )
}

export default Footer