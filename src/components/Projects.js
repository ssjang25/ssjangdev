import React from "react";
import "../styles/Projects.css";
import { LuFolderOpen } from "react-icons/lu";
import { BsGithub} from "react-icons/bs";
import { IoPlayOutline } from "react-icons/io5";

function demoCheck(projects, key, string){
  if (string !== ""){
    return (
      <a href={projects[key]["demo"]} target="_blank" rel="noopener noreferrer">
      <IoPlayOutline className="demo-link" size={25}/>
      </a>
    )
  }
}


function Projects() {
  var blankStar = '\u{2606}';
  var filledStar = '\u{2605}'
  var midDot = '\u{00B7}'
  const projects = {
    "Bubble Up!": {
      desc:
        "A social media app created to streamline event-planning with your social bubble. Watch your bubble grow and pop it when the event's over!",
      techStack: "Swift(UI), XCode",
      source: "https://github.com/ssjang25/BubbleUp",
      demo: "https://streamable.com/jn3ai9"
    },
    "Mealify": {
      desc:
        "Struggling to come up with your next dinner idea? Use this web-app that utilizes Google's Gemini to create your next dinner plans with the ingredients from a photo of your groceries.",
      techStack: "React, Node, HTML/CSS, Express",
      source: "https://github.com/allysontrinh/Mealify",
      demo: "https://vimeo.com/914703473"
    },
    "Welcome Home": {
      desc:
        "A mental health wellness Web-App created with college students in mind. Take refuge in your 'virtual safe space' where you can journal, create a character, play music, and raise a virtual kitty.",
      techStack: "Node, Express, Javascript, PouchDB",
      source: "https://github.com/allysontrinh/326-Final-Project",
      demo: ""
    },
    "My First Period": {
      desc:
        "An educational iOS game aimed to destigmatize periods: Help a young girl navigate through her 'First Period'!",
      techStack: "React Native, Expo Go",
      source: "https://github.com/ssjang25/My-First-Period-App",
      demo: ""
    },
    "This Website": {
      desc:
        "Not sure if I need a description for this one...",
      techStack: "React, Bootstrap",
      source: "https://github.com/ssjang25/ssjang25.github.io",
      demo: "https://ssjang25.github.io/ssjangdev/"
    },
    "Ask-A-Valentine":{
      desc: "Too shy to ask your special someone to be your valentine? Use this Java app to ask them for you. Simply type in their name and send the app their way.",
      techStack: "Java, JavaSwing",
      source: "https://github.com/ssjang25/Ask-A-Valentine",
      demo:""
    }
  };

  return (
    <div id="projects">
      <div className="topBlur"/>
      <h2 className="projects-header">{"/ projects "}{"."}{midDot}{blankStar}{midDot}{"."}{midDot}{filledStar}{midDot}{"."}</h2>
      <div className="projects-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => {
            return (
            <li className="projects-card">
                <div className="card-header">
                    <LuFolderOpen className="folder-icon" size={30}/>
                  <div className="links">
                    <a href={projects[key]["source"]} target="_blank" rel="noopener noreferrer">
                      <BsGithub className="git-link" size={25}/>
                    </a>
                    {demoCheck(projects, key, projects[key]["demo"])}
                </div>
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Projects