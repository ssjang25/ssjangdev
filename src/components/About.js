import React from 'react'
import '../styles/About.css'
import { BiLogoTypescript, BiLogoJavascript, BiLogoJava } from "react-icons/bi";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { ImHtmlFive } from "react-icons/im";
import { FaReact,FaCss3Alt,FaNode } from "react-icons/fa";
import { IconContext } from 'react-icons';


function About() {
    var blankStar = '\u{2606}';
    var filledStar = '\u{2605}'
    var midDot = '\u{00B7}'
    var size = 50
    const tech_stack = {
        "Typescript": <IconContext.Provider value={{size: size}}>
        <BiLogoTypescript />
        </IconContext.Provider>,
        "Javascript": <IconContext.Provider value={{size: size}}>
        <BiLogoJavascript />
        </IconContext.Provider>,
        "React": <IconContext.Provider value={{size: size}}>
        <FaReact />
        </IconContext.Provider>,
        "Java": <IconContext.Provider value={{size: size}}>
        <BiLogoJava />
        </IconContext.Provider>,
        "Figma": <IconContext.Provider value={{size: size}}>
        <PiFigmaLogoDuotone />
        </IconContext.Provider>,
        "Node": <IconContext.Provider value={{size: size}}>
        <FaNode/>
        </IconContext.Provider>,
        "HTML": <IconContext.Provider value={{size: size}}>
        <ImHtmlFive />
        </IconContext.Provider>,
        "CSS": <IconContext.Provider value={{size: size}}>
        <FaCss3Alt />
        </IconContext.Provider>
    };

    return (
    <div id="about">
        <div className="about-container">
            <h2 className="about-header">{"/ about me "}{"."}{midDot}{blankStar}{midDot}{"."}{midDot}{filledStar}{midDot}{"."}</h2>
                <div className='about-content'>
                    <img className="about-logo" src={`${process.env.PUBLIC_URL}/assets/headshot.png`} alt="logo" />
                    <div className='about-text'>
                        <p className='about-desc'>
                            I started off as a chemistry major but eventually made the switch into computer science during sophomore year (2022). I know how to work with and have had courses utilizing:
                        </p>   
                        <ul className="about-techstack">
                            {Object.keys(tech_stack).map((key, i) => {
                                return (
                                    <li className="about-techitem">
                                        {tech_stack[key]}
                                        <div className="techitem-text">
                                            {key}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
        </div>
        <div className="topBlur"/>
        <div className="bottomBlur"/>
    </div>
  )
}

export default About