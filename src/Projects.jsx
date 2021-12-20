import './App.css';
import Tilt from "react-parallax-tilt";

function Projects () {
  const projectPics = [
    { 
      image: "switchRecord.png", 
      description: "A database of my physical collection of my Nintendo Switch games. Built using React and Redux on the client side, and Node.js, express, and Knex.js on the server side. Some elements of the CRUD principle were implemented, I am able to add games and remove them from the database. There is also an experimental image-upload feature in the app that utilises the npm libraries Axios for the frotnend and Multer in the backend.",
      url: "https://my-physical-switch-collection.herokuapp.com/"
    },
    {
      image: "guitarRecord.png", 
      description: "I built this app as a personal project during the DEV ACADEMY bootcamp. The App is entirely built in React and uses some dataset files for it's data management. React Router v6 is used for navigating round the pages. This was the first app where I started to get my head around incorporating audio elements into a website using a combination of Javascript and HTML. Some pages of the app are still under construction.",
      url: "https://tune-and-learn-guitar.herokuapp.com/"
    },
    {
    image: "9weekRecord.png", 
      description: "This app was built as my group's final project for the DEV ACADEMY bootcamp. It was designed a yearbook style app for our cohort to use to keep in touch with one another post-bootcamp and reminisce about their time in bootcamp using personal quotes and comments posted on users' pages. It was built using a robust tech-stack including Node.js, Knex.js, Express, React, Redux, and Firebase. I was Scrum Facilitator and Git Keeper so oversaw many aspects of the codebase and got most involved with the feature to add comments and assisted our designer with the styling of the app.",
      url: "https://eda-9-week-book.herokuapp.com/#/"
    }
    ]

    return (
    <div className="projects">
      
      <div className="projectDetails">
        <a href={`${projectPics[0].url}`}>
          <Tilt>
            <img className="projectPics" src={`${projectPics[0].image}`} alt="switch collection app" />
          </Tilt>
        </a>
        <p className="projectDescription">{projectPics[0].description}</p>
      </div>

      <div className="projectDetails">
        <a href={`${projectPics[1].url}`}>
          <Tilt>
            <img className="projectPics" src={`${projectPics[1].image}`} alt="guitar tuner app" />
          </Tilt>
        </a>
        <p className="projectDescription">{projectPics[1].description}</p>
      </div>

      <div className="projectDetails">
        <a href={`${projectPics[2].url}`}>
          <Tilt>
            <img className="projectPics" src={`${projectPics[2].image}`} alt="9 week book app" />
          </Tilt>
        </a>
        <p className="projectDescription">{projectPics[2].description}</p>
      </div> 
    </div>
     
    )
    

}

export default Projects

