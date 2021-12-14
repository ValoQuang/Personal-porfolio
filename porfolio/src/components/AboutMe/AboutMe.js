import React, {useEffect} from 'react'
import ScreenHeading from '../utilities/ScreenHeading/ScreenHeading'
import ScrollService from "../utilities/ScrollService"
import Animations from "../utilities/Animations"

import "./AboutMe.css"

const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) 
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubcription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "A junior developer who is passionate about creating cool website with MERN stack.",
        highlights: {
            bullets: [
                "Full stack web develop",
                "Interactive Front-End",
                "Building REST API",
                "Managing Database",
                "Redux State Management"
            ],
            heading: "What I know so far"
        }
    }

    const renderHighLight =()=>{
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            )));
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
               <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'}/> 
               <div className='about-me-card'>
                   <div className='about-me-profile'>
                       
                   </div>
                   <div className='about-me-details'>
                       <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                       <div className='about-me-highlights'>
                           <div className='highlight-heading'>
                               <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                           </div>
                           {renderHighLight()}
                       </div>
                       <div className='about-me-options'>
                       <button className='btn primary-btn'>
                        {""} Hire me {""}
                        </button>
                        <a href="QuangCV.pdf" download="Quang QuangCV.pdf">
                        <button className='btn highlight-btn'>Get Resume</button>
                        </a>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default AboutMe