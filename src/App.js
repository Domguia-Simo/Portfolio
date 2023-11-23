import React from 'react'

// Components
import NavBar from './components/Navbar'
import Description from './components/Description'
import Project from './components/Projects'
import Skills from './components/Skills'
import Interests from './components/Interests'


// Font icons
import './assets/fontAwesome/css/all.css'

const App =()=>{
  return(
    <React.Fragment>
      <NavBar/>
      <Description/>
      <Project/>
      <Skills/>
      <Interests/>
      <br/><br/><br/><br/><br/>
    </React.Fragment>
  )
}

export default App

