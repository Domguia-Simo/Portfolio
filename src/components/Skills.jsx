import React from "react";

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
                        <span className="right-motion">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="js"/>
                            <img src={php} alt="php"/>
                            <img src={java} alt="java"/>
                            <img src={python} alt="python"/>

                            <i className="fab fa-c"></i>

                        </span>

                    </div>

                    <div>
                        <span className="left-motion">
                            <img src={bootstrap} alt="bootstrap" />
                            <img src={sass} alt="sass"/>
                            <img src={react} alt="react"/>
                            <img src={laravel} alt="laravel"/>
                            <img src={node} alt="node"/>
                        </span>
                    </div>

                    <div>
                        <span className="right-motion">
                            <img src={linux} alt="linux"/>
                            <img src={mdb} alt="mdb"/>
                            <img src={github} alt="github"/>
                            <img src={dribbble} alt="dribbblr"/>
                        </span>

                    </div>

                </div>
            </h1>
        </React.Fragment>
    )
}

export default Skills