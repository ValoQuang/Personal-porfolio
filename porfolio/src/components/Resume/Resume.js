import React, {useState} from 'react'
import ScreenHeading from '../utilities/ScreenHeading/ScreenHeading'
import ScrollService from "../utilities/ScrollService"
import Animations from "../utilities/Animations"

import "./Resume.css"

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) 
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubcription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading =(props)=>{
        return (
            <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading: ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>{props.fromDate + " " + props.toDate}</div>
                    ):
                    (<div></div>)
                    }
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>
        ) 
    }

    const resumeBullets = [
        {label: "Education", logoSrc :"education.svg"},
        {label: "Work history", logoSrc :"work-history.svg"},
        {label: "Programming Skills", logoSrc :"programming-skills.svg"},
        {label: "Projects", logoSrc :"projects.svg"},
        {label: "Interests", logoSrc :"interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 70},
        {skill: "HTML", ratingPercentage: 95},
        {skill: "CSS", ratingPercentage: 95},
        {skill: "Express JS", ratingPercentage: 70},
        {skill: "React JS", ratingPercentage: 80 },
        {skill: "Node JS", ratingPercentage: 65},
        {skill: "MongoDb", ratingPercentage: 90},
        {skill: "Firebase", ratingPercentage: 80},
    ];

    const projectDetails = [
        {title: "Personal Porfolio Website", duration: {fromDate:"2020", toDate:"2021"}, description:"My personal website with all my details and my work", subHeading:"Technologies used: React JS, Bootstrap, Node JS, RxJS, CSS, Redux"},
        {title: "Country Search", duration: {fromDate:"2020", toDate:"2021"}, description:"Using React Js, user can search, filter country name with REST API", subHeading:"Technologies used: React JS, Bootstrap, Node JS, RxJS, CSS, Redux"},
        {title: "Instafake", duration: {fromDate:"2020", toDate:"2021"}, description:"A simple web app where user can upload and view picture, made with Firebase as database", subHeading:"Technologies used: React JS, Express JS, Firebase, Bootstrap, Node JS, RxJS, Redux"},
        {title: "E-Library", duration: {fromDate:"2020", toDate:"2021"}, description:"My first FULL-STACK project, I built both Back-End and Front-End with MERN stack.", subHeading:"Technologies used: React JS,, Express JS, MongoDb, CSS, Bootstrap, Node JS, Redux"},
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading={"Metropolia UAS"}
                subHeading={"BACHELOR OF ENVIRONMENTAL ENGINEERING"}
                fromDate={"2014"} toDate={"2018"}
            />
             <ResumeHeading
                heading={"Aeropole Oy"}
                subHeading={"Commercial Pilot - (PostPoned due to Pandemic)"}
                fromDate={"2020"} toDate={"2021"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
        <ResumeHeading
            heading={"Ai-To Foods Oy - Helsinki"}
            subHeading={"Shift Manager/Chef"}
            fromDate={"2015"} toDate={"2018"}
        />
        <div className='experience-description'>
            <span className='resume-description-text'>Overwatch workflow, employees productivity during shift</span>
        </div>
        <ResumeHeading
            heading={"SSP Finland - Helsinki/Vantaa Airport"}
            subHeading={"Shift Manager - (currently laid off)"}
            fromDate={"2018"} toDate={"present"}
        />
        <div className='experience-description'>
            <span className='resume-description-text'>Overwatch workflow, employees productivity during shift</span>
        </div>
         <ResumeHeading
         heading={"Integrify"}
         subHeading={"Full Stack Developer"}
         fromDate={"2021"} toDate={"2022"}
        />
        <div className='experience-description'>
            <span className='resume-description-text'>Full stack developer, making website and focus on MERN stack</span>
        </div>
        </div>,

        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillDetails.map((skill, index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage-bar'>
                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectDetails.map((projectDetails, index)=>(
                <ResumeHeading
                key={index}
                subHeading={projectDetails.subHeading}
                heading={projectDetails.title}
                description={projectDetails.description}
                fromDate={projectDetails.duration.fromDate}
                toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,

        <div className='resume-screen-container' key="interests">
            <ResumeHeading
            heading={"Horse Back riding"}
            description="I like horse back riding, one of my life goal is to have a barn and lots of animals"
            />
            <ResumeHeading
            heading={"Flying"}
            description="Flying is my passion along with coding, I fly whenever my finance allows me to do"
            />
            <ResumeHeading
            heading={"Listen to music, good music"}
            description="During my free time I love to listen to music, all kind of good music"
            />
        </div>
    ]

    const handleCarousal =(index)=>{
        let offSetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY("+ index* offSetHeight* -1 + "px)"}
        }
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets =()=>{
        return resumeBullets.map((bullet,index)=>(
            <div onClick={()=> handleCarousal(index)} className={index=== selectedBulletIndex ? "bullet selected-bullet": "bullet"} key={index}>
                <img src={require (`../../assets/Resume/${bullet.logoSrc}`).default} className='bullet-logo' alt="oops"/>
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen =()=>{
       return (
           <div style={carousalOffSetStyle.style} className='resume-details-carousal'>
               {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
           </div>
       ) 
    }

    return (
        <div className='resume-container screen-container' id={props.id|| ""}>
            <div className='resume-container'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume
