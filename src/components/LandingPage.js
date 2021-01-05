import React from 'react';

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(){
        return (
            <div className="page-content-wrapper">
                <div className="Landing-Page-Content">
                    <h3>Computer Science Undergrad at Arizona State University</h3>
                    <h3>Expected graduation: May 2021</h3>
                    <h3>This website is currently under construction. Please check back later.</h3>
                    <h3>In the meantime, please check out my Resume, GitHub, LinkedIn, and Senior Capstone Project!</h3>
                </div>
            </div>
        )
    }

}

export default LandingPage;