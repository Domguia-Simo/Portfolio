import React from 'react'

import resume from '../assets/images/My Resume.pdf'

// Styling
import '../assets/styles/DescriptionStyles.css'

const Description =()=>{
    return(
        <React.Fragment>
            <div className='description'>

                <div className='left-desc'>
                    <img src={require('../assets/images/pp.jpg')} alt="Domguia Simo Ulrich" />
                </div>

                <div className='right-desc'>
                    <h1>
                        Hey 👋!!! <br/>
                        Am Domguia Simo Ulrich 😊,<br/>
                        A FullStack Software Engineer<br/>
                        💻🖥📱👨‍💻👌
                        
                    </h1><br/>

                    <div className='options'>
                        <a className='button' href={resume}>Download Resume</a>&nbsp;
                    </div><br/>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Description