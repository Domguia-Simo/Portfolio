import React ,{ useRef, useState ,useEffect} from 'react'

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
  
  useEffect(()=>{

    let sections = [skillRef ,projectRef ,interestRef]

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActive(entry.target.getAttribute('name'))
        }
      })
    },{
      threshold:0.3
    })
    sections.forEach(section => {
      if(section != null)
        observer.observe(section.current)
    })

  })

  return(
    <React.Fragment> 
      <NavBar active={active} setActive={setActive}/>
      <Description/>

      <div ref={skillRef} name='skills'>
        <Skills />
      </div>

      <div ref={projectRef} name='projects'>
        <Project />
      </div>

      <div ref={interestRef} name='interests'>
        <Interests/>
      </div>

      <Footer/>
    </React.Fragment>
  )
}

export default App

