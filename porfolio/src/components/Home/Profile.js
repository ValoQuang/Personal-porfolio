import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
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
                <div className ="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I am <span className='highlighted-text'>Quang Truong</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
