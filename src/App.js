import React ,{useLayoutEffect, useRef, useState} from 'react'

// Components
import NavBar from './components/Navbar'
import Description from './components/Description'
import Project from './components/Projects'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Footer from './components/Footer'

// Font icons
import './assets/fontAwesome/css/all.css'   

const App =()=>{

  const skillRef =  useRef(null)
  const projectRef =  useRef(null)
  const interestRef =  useRef(null)


  const [active ,setActive] = useState('skills')

  useLayoutEffect(()=>{
    const skillObserver = new IntersectionObserver((entries ,observer)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          if(active !== 'skills'){
            setActive('skills')
          }
        }
      })
    },{
      // root:null,
      // rootMargin:'0px',
      threshold:0.2
    })
    // if(skillRef.current){
      skillObserver.observe(skillRef.current)
    // }
  
    const projectObserver = new IntersectionObserver((entries ,observer)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          if(active !== 'projects'){
            setActive('projects')
          }
        }
      })
    },{ 
      // root:null,
      // rootMargin:'0px',
      threshold:0.2
    })
    // if(projectRef.current){
      projectObserver.observe(projectRef.current)
    // }
  
    const interestObserver = new IntersectionObserver((entries ,observer)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          if(active !== 'interests'){
            setActive('interests')
          }
        }
      })
    },{
      // root:null,
      // rootMargin:'0px',
      threshold:0.2
    })   
    // if(interestRef.current){
      interestObserver.observe(interestRef.current)
    // }

  })

  return(
    <React.Fragment> 
      <NavBar active={active} setActive={setActive}/>
      <Description/>

      <div ref={skillRef}>
        <Skills />
      </div>

      <div ref={projectRef}>
        <Project />
      </div>

      <div ref={interestRef}>
        <Interests/>
      </div>

      <Footer/>
    </React.Fragment>
  )
}

export default App

