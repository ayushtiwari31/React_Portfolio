import React from 'react'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Reactjs from "../../img/react.png"
import Mongo from "../../img/mongo.png"
import Node from "../../img/node.png"
import Express from '../../img/express.png'
import js from '../../img/js.png'
import './Works.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

import {motion} from 'framer-motion'

function Works() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id='works'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Works for All these</span>
                <span>Technologies</span>
                <span style={{fontWeight:'bold',fontSize:'0.9rem'}}>
                    I am very passionate about Technology.
                    <br />
                    <br />
                    Currently ,We have experience in HTML ,CSS, JavaScript ,ReactJs .
                    <br />
                    <br />
                    And for Backend I have Experiance in Nodejs, PHP, MongoDB ,Express, MySQl,
                    <br />
                    <br />
                    We also offer Word Press Development.
                </span>
                <button className="button s-button">Hire Me</button>

                <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
                 ></div>
            </div>
        </div>
        {/* right side  */}
        <div className="w-right">
            <motion.div 
             initial={{ rotate: 45 }}
             whileInView={{ rotate: 0 }}
             viewport={{ margin: "-40px" }}
             transition={{ duration: 3.5, type: "spring" }}
             className="w-mainCircle">

              <div className="w-secCircle mongo">
                 {/* <img src={Upwork} alt="" /> */}
                 <img src={Mongo} alt="" />
               </div>
               <div className="w-secCircle express">
                 {/* <img src={Fiverr} alt="" /> */}
                 <img src={Express} alt="" />
               </div>
               <div className="w-secCircle js">
                 {/* <img src={Amazon} alt="" /> */}
                 <img src={js} alt="" / >
               </div>{" "}
               <div className="w-secCircle node">
                 {/* <img src={Shopify} alt="" /> */}
                 <img src={Node} alt="" />
               </div>
               <div className="w-secCircle react">
                 {/* <img src={Facebook} alt="" /> */}
                 <img src={Reactjs} alt="" />
               </div>

            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works