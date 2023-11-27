import React from 'react'


// Styling
import '../assets/styles/FooterStyles.css'

const Footer =()=>{
    return(
        <React.Fragment>
            <div className='footer'>
                Domguia Simo Ulrich &nbsp;&nbsp;&nbsp;    
                <i className='fab fa-google'></i>&nbsp;&nbsp;
                <i className='fab fa-facebook'></i>&nbsp;&nbsp;
                <i className='fab fa-twitter'></i>&nbsp;&nbsp;
                <i className='fab fa-github'></i>
            </div>
        </React.Fragment>
    )
}

export default Footer