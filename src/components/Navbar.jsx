import React from 'react'

// Styling
import '../assets/styles/NavBarStyles.css'

const NavBar=()=>{
    return(
        <React.Fragment>
            <div className='navbar'>

                <div className='name'>Domguia Simo Ulrich </div>

                <div className='left-bar'>  
                    <span>Projects</span>
                    <span>Skills</span>
                    <span>Interests</span>
                </div>

                <div className='right-bar'>
                    <span title='github'><i className='fab fa-github'></i></span>
                    <span title='linkedin'><i className='fab fa-linkedin'></i></span>
                    <span title='gmail'><i className='fab fa-google'></i></span>
                    <span title='twitter'><i className='fab fa-twitter'></i></span>
                </div>

            </div>
        </React.Fragment>
    )
}

export default NavBar