import React from "react";

// brands svgs
import bootstrap from '../assets/fontAwesome/svgs/brands/bootstrap.svg'
import react from '../assets/fontAwesome/svgs/brands/react.svg'
import java from '../assets/fontAwesome/svgs/brands/java.svg'
import node from '../assets/fontAwesome/svgs/brands/node.svg'
import php from '../assets/fontAwesome/svgs/brands/php.svg'
import laravel from '../assets/fontAwesome/svgs/brands/laravel.svg'
import js from '../assets/fontAwesome/svgs/brands/js.svg'
import html from '../assets/fontAwesome/svgs/brands/html5.svg'
import css from '../assets/fontAwesome/svgs/brands/css3.svg'
import sass from '../assets/fontAwesome/svgs/brands/sass.svg'
import linux from '../assets/fontAwesome/svgs/brands/linux.svg'
import mdb from '../assets/fontAwesome/svgs/brands/mdb.svg'
import github from '../assets/fontAwesome/svgs/brands/github.svg'
import dribbble from '../assets/fontAwesome/svgs/brands/dribbble.svg'
import python from '../assets/fontAwesome/svgs/brands/python.svg'



// Styling
import '../assets/styles/SkillStyles.css'

const Skills =()=>{
    return(
        <React.Fragment>
            <h1>
                <div className="skill-container">

                    <div>
                        <h6>Languages <i className="fas fa-chevron-right"></i></h6>
                        <span >
                            <i className="fas fa-c" title="C language"></i>
                            <img src={html} alt="html" title="html"/>
                            <img src={css} alt="css" title="css"/>
                            <img src={js} alt="js" title="js"/>
                            <img src={java} alt="java" title="java" />
                            <img src={php} alt="php" title="php"/>
                            <img src={python} alt="python" title="python"/>


                        </span>

                    </div>

                    <div>
                        <h6>Frameworks <i className="fas fa-chevron-right"></i></h6>
                        <span >
                            <img src={bootstrap} alt="bootstrap" title="bootstrap" />
                            <img src={sass} alt="sass" title="sass"/>
                            <img src={react} alt="react" title="reactjs & react native"/>
                            <img src={node} alt="node" title="nodejs"/>
                            <i className="fas fa-power-off" title="spring boot"></i>
                            <img src={laravel} alt="laravel" title="laravel"/>

                        </span>

                    </div>

                    <div>
                        <h6>Database <i className="fas fa-chevron-right"></i></h6>
                        <span >
                            <i title="mysql">sql</i>
                            <i title="postgres">psql</i>
                            <i title="mongodb">mongodb</i>

                        </span>
                    </div>

                    <div>
                        <h6>Techs <i className="fas fa-chevron-right"></i></h6>
                        <span >
                            <img src={linux} alt="linux" title="linux"/>
                            <img src={mdb} alt="mdb" title="mdb"/>
                            <img src={github} alt="github" title="github"/>
                            <img src={dribbble} alt="dribbble" title="dribbble"/>
                        </span>

                    </div>

                </div>
            </h1>
        </React.Fragment>
    )
}

export default Skills