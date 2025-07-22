import React from 'react';
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

function Intro() {
  return (
    <div id="intro">
        <div className="bottomBlur"/>
        <div className="intro-content">
          <span className="intro-title">
              <Typist>
                  <span> {"Hu,"}</span>
                  <Typist.Backspace count={3} delay={200} />
                  <span> {"Hi,"}</span>
                  <span> {"I'm"}</span>
                  <span className="name">{" Saea"}</span>
                  <Typist.Backspace count={2} delay={200} />
                  <span className="name">{"rah"}</span>
              </Typist>
          </span>
          <div className='intro-subtitle'>Aspiring software engineer, hackathon addict and occasional video game enthusiast.</div>
          <div className='intro-bio'>
            I'm a recent graduate from the University of Massachuestts Amherst and have received my Bachelor's in Computer Science in May 2025. I've done previous work as a Frontend Developer Intern for startup <b>ProsperOn</b>, and am currently working as an IT Intern for <b>Wave Life Sciences</b>.
          </div>
        </div>
        <img className="headshot" src={`${process.env.PUBLIC_URL}/assets/headshot.png`} alt="headshot" />
    </div>
  )
}

export default Intro