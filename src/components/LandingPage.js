import React from 'react';

import ME from '../assets/img/ZacharyCooper.JPG';

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(){
        return (
            <div className="page-content-wrapper">
                <div className="landing-page-content">
                    <div className="info-card">
                        <img className="Headshot" src={ME} alt=""/>
                        <div className="about-me">
                            <h1>About Me</h1>
                            <h3>Computer Science Undergraduate at Arizona State University</h3>
                            <h3>Expected graduation: May 2021</h3>
                            <h3>I have 8 months of fullstack development internship experience at Equinix.</h3>
                            <h3>Please note that this website is still under development and not complete.</h3>
                            <h3>In the meantime, please check out my Resume, GitHub, LinkedIn, and Senior Capstone Project!</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LandingPage;