import './App.css';


function Contact () {
  return (
    <div className="contactDetails">
      
      <div className="phone"> 
        <img className="phoneIcon" src="phoneicon.png" alt="phone symbol"></img><br/>
        <span><a className="phoneLink" href="tel:0221265104">022 126 5104</a></span>
      </div>

      <div className="email">
        <img className="emailIcon" src="emailicon.png" alt="email symbol"></img><br/>
        <span><a className="emailLink" href="mailto:dannygoulter@gmail.com">dannygoulter@gmail.com</a></span>
      </div>
   
      <div className="location">
        <img className="locationIcon" src="locationicon.png" alt="location symbol"></img>
        <span>I am based in <a className="locationLink" href="https://www.google.co.nz/maps/place/Christchurch/@-43.5119965,172.5287907,12z/data=!3m1!4b1!4m5!3m4!1s0x6d322f4863c5ed01:0x500ef8684799945!8m2!3d-43.5320214!4d172.6305589">Christchurch, NZ</a>. For an exact postal address please contact me directly.</span>
      </div>

      <div className="github">
        <img className="githubIcon" src="githubicon.png" alt="github symbol"></img>
        <span><a className="githubLink" href="https://github.com/danny-goulter">Github</a></span>
      </div>

    </div>
    
  )
}

export default Contact