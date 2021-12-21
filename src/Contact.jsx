import './App.css';


function Contact () {
  return (
    <div className="contactDetails">
      
      <div className="phone"> 
        <img className="phoneIcon" src="phoneicon.png" alt="phone symbol"></img><br/>
        <span>+64 22 126 5104</span>
      </div>

      <div className="email">
        <img className="emailIcon" src="emailicon.png" alt="email symbol"></img><br/>
        <span><a className="emailLink" href="mailto:dannygoulter@gmail.com">dannygoulter@gmail.com</a></span>
      </div>
   
      <div className="location">
        <img className="locationIcon" src="locationicon.png" alt="location symbol"></img>
        <span>I am based in Christchurch NZ. For an exact postal address please contact me directly.</span>
      </div>

      <div className="github">
        <img className="githubIcon" src="githubicon.png" alt="github symbol"></img>
        <span><a href="https://github.com/danny-goulter">Github</a></span>
      </div>

    </div>
    
  )
}

export default Contact