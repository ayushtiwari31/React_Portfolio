import React from 'react'
import LinkedIn from '../../img/linkedin.png'
import Instagram from "../../img/instagram.png"
import Github from "../../img/github.png"
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv.jsx";
import './Intro.css'
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';
import {motion} from 'framer-motion'

function Intro() {

  const transition={duration:2,type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" >
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
                <span>Ayush Tiwari</span>
                <span>MERN Stack Developer with high level of experience in web designing
            and development, producing the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>

        </div>
  
        {/* right side */}


        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt=""/>

            <motion.div 
            initial={{top:'-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            style={{top:'-4%',left:'68%'}}>
              <FloatinDiv img={crown} text1="Web" text2="Developer" />
            </motion.div>


           <motion.div
           initial={{left:'9rem',top:'18rem'}}
           whileInView={{left:'0rem'}}
           transition={transition}
            style={{top:'18rem',left:'0rem'}}>
             {/* floatinDiv mein change hy dark mode ka */}
             <FloatinDiv img={thumbup} text1="Competitive Programmer" text2="" />
           </motion.div>

            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div
              className="blur"
              style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
            ></div>

        </div>
    </div>
  )
}

export default Intro