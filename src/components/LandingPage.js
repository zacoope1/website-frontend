import React from 'react';
import {Link} from 'react-router-dom';

import EMPTY_IMG from '../assets/img/empty.jpg';

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render(){
        return (
            <div className="page-content-wrapper">
                <div className="landing-page-content" Style="background: orange;">
                    <h1>About Me</h1>
                    <h3>Computer Science Undergraduate at Arizona State University</h3>
                    <h3>Expected graduation: May 2021</h3>
                    <h3>I have 8 months of fullstack development internship experience.</h3>
                    <h3>Please note that this website is still under development and not complete.</h3>
                    <h3>In the meantime, please check out my Resume, GitHub, LinkedIn, and Senior Capstone Project!</h3>
                </div>
                <div className="landing-page-content"  Style="background: yellow;">
                    <h1>Skills</h1>
                    <div className="sections-evenly-spaced">
                        <div className="section-card">
                            <h2>Languages</h2>
                            <ul>
                                <li><h4>Java</h4></li>
                                <li><h4>Javascript</h4></li>
                                <li><h4>Python</h4></li>
                                <li><h4>C/C++</h4></li>
                                <li><h4>SQL</h4></li>
                                <li><h4>Bash</h4></li>
                            </ul>
                        </div>
                        <div className="section-card">
                            <h2>Frameworks/Libraries/DB</h2>
                            <ul>
                                <li><h4>Spring-Boot</h4></li>
                                <li><h4>PostgreSQL</h4></li>
                                <li><h4>React</h4></li>
                                <li><h4>Redux</h4></li>
                                <li><h4>Ajax</h4></li>
                            </ul>
                        </div>
                        <div className="section-card">
                            <h2>Tools/Other</h2>
                            <ul>
                                <li><h4>Maven</h4></li>
                                <li><h4>Jenkins</h4></li>
                                <li><h4>Docker</h4></li>
                                <li><h4>Git/Github</h4></li>
                                <li><h4>Agile Methodologies</h4></li>
                                <li><h4>Scrum/Kanban</h4></li>
                                <li><h4>Linux, Unix, Windows</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="landing-page-content"  Style="background: tomato;">
                    <h1>Portfolio Projects</h1>
                    <div className="sections-evenly-spaced">
                            <div className="section-card">
                                <h3>ToDo Application</h3>
                                <img src={EMPTY_IMG} alt=""/>
                                <div className="btn-center">
                                    <Link className="section-card-button" onClick={ () => { this.setState({ menuEnabled: false }) } } to="/login">Demo</Link>
                                    <a Target="_blank" className="section-card-button" href="https://github.com/zacoope1/website-backend">Backend Source</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}

export default LandingPage;