import React from 'react';
import ME from '../../assets/img/ZacharyCooper.JPG';

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state = {
            disclaimerShown: true,
        }
    }

    render(){
        return (
            <div className="page-content-wrapper">
                <div className="landing-page-content">
                    {
                        this.state.disclaimerShown ? 
                            (
                                <div className="Disclaimer">
                                    <p><b>Disclaimer: </b>This website is currently under development. There may be some theme errors and portfolio project bugs.</p>
                                    <button onClick={() => {this.setState({disclaimerShown: false})}}>x</button>
                                </div>
                            )
                        :
                            null
                    }
                    <div className="info-card">
                        <img className="Headshot" src={ME} alt=""/>
                        <div className="about-me">
                            <h1>About Me</h1>
                            <h3>Computer Science Undergraduate at Arizona State University</h3>
                            <h3>I am expected to graduate in May of 2021</h3>
                            <h3>I have 8 months of fullstack development internship experience</h3>
                            <h3>I am fluent in Java, Python, C++, Javascript, HTML, and CSS</h3>
                            <h3>I have worked professionally with React, Redux, Spring Boot, and PostgreSQL</h3>
                            <h3>I also have some academic experience with C#, .Net/ASP.Net, and Swift</h3>
                            <h3>Portfolio Projects: Coming Soon!</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LandingPage;