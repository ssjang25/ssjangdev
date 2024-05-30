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
                  <span> {"hu,"}</span>
                  <Typist.Backspace count={3} delay={200} />
                  <span> {"hi,"}</span>
                  <span> {"i'm"}</span>
                  <span className="name">{" saea"}</span>
                  <Typist.Backspace count={2} delay={200} />
                  <span className="name">{"rah"}</span>
              </Typist>
          </span>
          <div className='intro-subtitle'>Hackathon addict and occasional video game enthusiast.</div>
          <div className='intro-bio'>
            I'm an aspiring software engineer from Northborough, MA specializing in front-end development.
            I'm a rising senior currently pursuing a B.S in Computer Science at UMass Amherst.
          </div>
        </div>
        <img className="headshot" src={`${process.env.PUBLIC_URL}/assets/headshot.png`} alt="headshot" />
    </div>
  )
}

export default Intro