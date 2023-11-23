import React from 'react'

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
                        
                    </h1>

                    <div className='options'>
                        <button>Download Resume</button>
                    </div><br/>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Description