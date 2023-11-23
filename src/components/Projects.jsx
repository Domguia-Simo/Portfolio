import React from 'react'

// Styling
import '../assets/styles/ProjectStyles.css'

const Project =()=>{

    return(
        <React.Fragment>
            <div className='projects' id="projects">

                <div className='project'>
                    <div className='project-image borderRight'>
                        <img 
                            src={require('../assets/images/recipe.PNG')} 
                            alt="recipe finder"
                            className='img-large'
                        />

                        <img 
                            src={require('../assets/images/recipe-mobile.PNG')} 
                            alt="recipe finder mobile"
                            className='img-small'
                        />
                       
                    </div>

                    <div className='project-description'>
                        <h2>Recipe Finder</h2>
                        <div className='content'>
                            A web app to find the recipe of various meals.<br/>
                            I developped the responsive front-end in reactjs.<br/>
                            For the back-end ,i used an external(online) free api.<br/>
                            One of my very first front-end projects developped by June 2023.<br/>
                            <h3>Draw Backs</h3>
                            Abnormal behaviour when searching with typing errors. <br/>
                            Unavailability of some well known meals.<br/>
                           <br/><button> Github repository <i className='fab fa-github'></i></button>

                        </div>
                    </div>
                </div>

                <div className='project'>

                <div className='project-description borderRight'>
                        <h2>African Institute Of Computer Science </h2>
                        <div className='content'>
                            <h4>Group Project</h4>
                            We developped a school(AICS Cameroon) landing page and platform.<br/>
                            I worked as a front-end lead in <strong>Reactjs</strong> and part of the backend using <strong>Nodejs</strong> and <strong>Mongodb</strong> as the database.<br/>
                        <h3>Experience</h3>
                        This is where i learned most of my backend knowldge with nodejs and using non relational dbs.<br/>
                        <br/><button disabled>Github Repository <i className='fab fa-github'></i></button>
                        </div>
                    </div>

                    <div className='project-image'>
                        <img 
                            src={require('../assets/images/iai.PNG')} 
                            alt="IAI"
                            className='img-large'
                        />

                        <img 
                            src={require('../assets/images/iai-mobile.PNG')} 
                            alt="IAI mobile"
                            className='img-small'
                        />
                       
                    </div>

           
                </div>

            </div>
        </React.Fragment>
    )
}

export default Project