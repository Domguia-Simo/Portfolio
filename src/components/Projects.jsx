import React from 'react'

// Styling
import '../assets/styles/ProjectStyles.css'

//brands svgs 
import react from '../assets/fontAwesome/svgs/brands/react.svg'
import node from '../assets/fontAwesome/svgs/brands/node.svg'
import sass from '../assets/fontAwesome/svgs/brands/sass.svg'

const Project =()=>{

    return(
        <React.Fragment>
            <div  id="projects" className='projects'>

                {/* Meant for large screen devices > 1350px */}
                <div className={'project'}>
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
                           <br/><button onClick={()=>window.location = 'https://github.com/Domguia-Simo/Recipe_Finder'}> Github repository <i className='fab fa-github'></i></button>

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
                        <br/><button onClick={()=>window.location = 'https://github.com/AndersonAgbor/IAI-SMS'}>Github Repository <i className='fab fa-github'></i></button>
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

                <div className='project'>
                    <div className='project-image borderRight'>

                        <img 
                            src={require('../assets/images/hobbie-login.PNG')} 
                            alt="Hobbie's Login form"
                            className='img-small'
                        />

                        <img 
                            src={require('../assets/images/hobbie-profile.PNG')} 
                            alt="The profile of a hobbie user"
                            className='img-small'
                        />   

                        <img 
                            src={require('../assets/images/hobbie-chat.PNG')} 
                            alt="Chatting system of hobbie"
                            className='img-small'
                        />
                       
                    </div>

                    <div className='project-description'>
                        <h2>Hobbie</h2>
                        <div className='content'>
                            A new social media platform to connect people with thesame center of interest.<br/>
                            I developped the complete fullStack app with react, nodejs and mongoDb for the database.<br/>
                            I used the socket library for the implementation of the chatting system .<br/>
                            <h3>Draw Backs</h3>
                            Not yet deployed in the cloud. <br/>
                            Still working on the mobile version in react native.<br/>
                           <br/><button onClick={()=> window.location = 'https://github.com/Domguia-Simo/Hobbie-Web-Frontend'}> Github repository <i className='fab fa-github'></i></button>

                        </div>
                    </div>
                </div>


                {/* Essentially for mobile or small screen size devices */}
                <div className='project-card'>
                    <strong style={{display:'flex' ,alignItems:'center' ,fontSize:'x-large'}}>
                        Recipe Finder &nbsp;<img src={react} alt='react' title='react'/>
                    </strong>
                    <br/>
                    <div>
                        A web app to find the recipe of various meals.<br/>
                        Worked only on the front-end part and used external api endpoints.<br/>
                        
                    </div>
                    <button onClick={()=>window.location = 'https://github.com/Domguia-Simo/Recipe_Finder'}>Github Repo</button>
                </div>

                <div className='project-card'>
                    <strong style={{display:'flex' ,alignItems:'center' ,fontSize:'x-large'}}>
                        IAI SMS &nbsp;<img src={react} alt='react' title='react'/>
                        &nbsp;&nbsp; <img src={node} alt='node' title='node'/>
                    </strong>
                    <br/>
                    <div>
                        A school management system(SMS), to manage and control school's activities.<br/>
                        Worked as a front-end lead in the platform development in react and part of the backend development with nodejs/expressjs. <br/>
                        
                    </div>
                    <button onClick={()=>window.location = 'https://github.com/AndersonAgbor/IAI-SMS'}>Github Repo</button>
                </div>

                <div className='project-card'>
                    <strong style={{display:'flex' ,alignItems:'center' ,fontSize:'x-large'}}>
                        Hobbie &nbsp;<img src={react} alt='react' title='react'/>
                        &nbsp;&nbsp; <img src={node} alt='node' title='node'/>
                        &nbsp;&nbsp; <img src={sass} alt='sass' title='sass'/>
                    </strong>
                    <br/>
                    <div>
                        A social media platform,which main purpose is to connect users wth same center of interest.<br/>
                        Fully developped the front and back-end.  <br/>
                        
                    </div>
                    <button onClick={()=> window.location = 'https://github.com/Domguia-Simo/Hobbie-Web-Frontend'}>Github Repo</button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Project