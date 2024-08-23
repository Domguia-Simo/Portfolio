import React from 'react'


// Styling
import '../assets/styles/FooterStyles.css'

const Footer =()=>{
    return(
        <React.Fragment>
            <div className='footer'>
                Domguia Simo Ulrich &nbsp;&nbsp;&nbsp;    
                <a href="mailto:domguiasimoulrich@gmail.com" className='fab fa-google'></a>&nbsp;&nbsp;
                {/* <a href="" className='fab fa-facebook'></a>&nbsp;&nbsp; */}
                {/* <i className='fab fa-twitter'></i>&nbsp;&nbsp; */}
                <a href="https://github.com/Domguia-Simo?tab=repositories" className='fab fa-github'></a>
            </div>
        </React.Fragment>
    )
}

export default Footer