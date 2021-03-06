import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LandingPage from './LandingPage';

    class Home extends React.Component {

        constructor() {
            super();
            this.state = { mobileMode: false, menuEnabled: false }
        }

        componentDidMount(){
            window.addEventListener('resize', () => {this.checkMobileMode()});
            this.checkMobileMode();
        }

        componentDidUpdate(){
            this.checkMobileMode();
        }

        checkMobileMode(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1000){
                if(this.state.mobileMode !== true){
                    this.setState({mobileMode: true,});
                }
            }
            else {
                if(this.state.mobileMode !== false){
                    this.setState({mobileMode: false,});
                }
            }
        }

        render() {
            return (
                <Router>
                    <div>
                        <nav>
                            <div className="nav-logo">
                                <h2>Zachary A. Cooper</h2>
                                <h5>Computer Science Undergrad</h5>
                            </div>
                            {
                                this.state.mobileMode === true ?
                                (  
                                    this.state.menuEnabled === false ?
                                    (
                                        <div className="nav-drop-menu">
                                            <div class="container" onClick={ () => { this.setState( { menuEnabled: true } ) } }>
                                                <div class="bar1"></div>
                                                <div class="bar2"></div>
                                                <div class="bar3"></div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="nav-drop-menu">
                                            <div class="change" onClick={ () => { this.setState( { menuEnabled: false } ) } }>
                                                <div class="bar1"></div>
                                                <div class="bar2"></div>
                                                <div class="bar3"></div>
                                            </div>
                                            <div className="nav-drop-menu-links">
                                                <Link onClick={ () => { this.setState({ menuEnabled: false }) } } href="/">Home</Link>
                                                <a onClick={ () => { this.setState({ menuEnabled: false }) } } href="/app">App</a>
                                                <a Target="_blank" href="/Zachary-Cooper-Resume.pdf">Resume</a>
                                                <a Target="_blank" onClick={ () => { this.setState({ menuEnabled: false }) } } href="https://github.com/zacoope1">Github</a>
                                                <a Target="_blank" onClick={ () => { this.setState({ menuEnabled: false }) } } href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/" >LinkedIn</a>
                                                <a Target="_blank" onClick={ () => { this.setState({ menuEnabled: false }) } } href="https://zacharyacooper.com">Capstone</a>
                                            </div>
                                        </div>
                                    )
                                )
                                :
                                (
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><a onClick={ () => { this.setState({ menuEnabled: false }) } } href="/app">App</a></li>
                                        <li><a Target="_blank" href="/Zachary-Cooper-Resume.pdf">Resume</a></li>
                                        <li><a Target="_blank" href="https://github.com/zacoope1">Github</a></li>
                                        <li><a Target="_blank" href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/" >LinkedIn</a></li>
                                        <li><a Target="_blank" href="https://zacharyacooper.com">Capstone</a></li>
                                    </ul>
                                )
                            }
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage />
                            </Route>
                        </Switch>
                    </div>
              </Router>
            );
        }
}

export default Home;