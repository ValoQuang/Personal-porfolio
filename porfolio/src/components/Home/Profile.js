import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typical from "react-typical"

import "./Profile.css"

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                    <div className='colz-icon'>
                        <a href="https://www.facebook.com/ngoc.quang.754/">
                            <FacebookIcon/>
                        </a>
                        <a href="https://www.google.com/">
                            <GoogleIcon/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                        </a>
                        <a href="https://www.youtube.com/">
                            <YouTubeIcon/>
                        </a>
                        <a href="https://twitter.com/">
                            <TwitterIcon/>
                        </a>
                    </div> 
                    </div>
                </div>
                <div className ="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I am <span className='highlighted-text'>Quang Truong</span>
                    </span>
                </div>
                
                <div className='profile-details-role'>
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical
                                loop={Infinity}
                                steps={["Ethusiastic Dev", 1000,
                                "MERN Stack", 1000,
                                "Node JS ", 1000,
                                "React JS", 1000,
                                "Cross platform", 1000,
                                "MongoDb/Posgre", 1000,
                                "GraphQL", 1000,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>“In the midst of chaos, there is also opportunity.”</span>
                    </span>
                </div>

                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""} Hire me {""}
                    </button>
                    <a href="QuangCV.pdf" download="Quang QuangCV.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>  
        </div>
    )
}
