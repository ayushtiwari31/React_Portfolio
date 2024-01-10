import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";

import Resume from './resume.pdf';
import {motion} from 'framer-motion'





function Services() {

  const transition={duration:1,type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>MyAwesome</span>
            <span>services</span>
            <span>
              Lorem ispum is simpley dummy text of printing of printing Lorem
              <br />
              ispum is simpley dummy text of printing
            </span>

            <a href={Resume} download>
               <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right  */}
        <div className="cards">

            {/* first card */}
        <motion.div style={{left:'22rem'}}
        whileInView={{left:'20rem'}}
        initial={{left:'27rem'}}
        transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>

             {/* second card */}
        <motion.div
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-3rem" }}
        transition={transition}
         style={{top:'12rem',left:'-1rem'}}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>

            {/* 3rd */}
        <motion.div 
        initial={{ top: "19rem", left: "27rem" }}
        whileInView={{ left: "16rem" }}
        transition={transition}
        
        style={{top:'19rem',left:'18rem'}}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>


        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

        </div>
    </div>
  )
}

export default Services