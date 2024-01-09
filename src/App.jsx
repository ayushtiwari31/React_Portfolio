import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App
