import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle">3+</div>
            <span style={{color:darkMode?'white':''}}>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">600+</div>
            <span style={{color:darkMode?'white':''}}>DSA</span>
            <span>questions</span>
        </div>
        <div className="achievement">
            <div className="circle">50+</div>
            <span style={{color:darkMode?'white':''}}>Web Development</span>
            <span>projects</span>
        </div>
    </div>
  )
}

export default Experience