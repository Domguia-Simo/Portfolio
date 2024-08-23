import React from 'react'

// Styling
import '../assets/styles/NavBarStyles.css'

const NavBar=({active ,setActive})=>{
    return(
        <React.Fragment>
            <div className='navbar'>

                <div className='name'>Domguia Simo Ulrich </div>

                <div className='left-bar'>  
                    <span><a href="#skills" 
                        onClick={()=>setActive('skills')}
                        style={{textDecoration:'none' , 
                        color:active === 'skills' ? 'blue':'black' ,
                        borderBottom:active === 'skills' ? 'solid 2px blue':'solid 2px transparent' ,
                        transition:'all 0.3s ease-in-out'}}>
                        Skills</a>
                    </span>

                    <span><a href="#projects" 
                        onClick={()=>setActive('projects')}
                        style={{textDecoration:'none' , color:active === 'projects' ? 'blue':'black' ,
                        borderBottom:active === 'projects' ? 'solid 2px blue':'solid 2px transparent',
                        transition:'all 0.3s ease-in-out'}}>
                        Projects</a>
                    </span>

                    <span><a href="#interests" 
                        onClick={()=>setActive('interests')}
                        style={{textDecoration:'none' , color:active === 'interests' ? 'blue':'black' ,
                        borderBottom:active === 'interests' ? 'solid 2px blue':'solid 2px transparent',
                        transition:'all 0.3s ease-in-out'}}>
                        Interests</a>
                    </span>
                </div>

                <div className='right-bar'>
                    <a href="https://github.com/Domguia-Simo?tab=repositories" title='github'><i className='fab fa-github'></i></a>
                    <a  href="https://www.linkedin.com/in/ulrich-domguia-simo-912b1b322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title='linkedin'><i className='fab fa-linkedin'></i></a>
                    <a href="mailto:domguiasimoulrich@gmail.com" title='gmail'><i className='fab fa-google'></i></a>
                    {/* <span title='twitter'><i className='fab fa-twitter'></i></span> */}
                </div>

            </div>
        </React.Fragment>
    )
}

export default NavBar