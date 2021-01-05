import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';

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
                                <h5>Software Engineer</h5>
                            </div>
                            {
                                this.state.mobileMode === true ?
                                (  
                                    this.state.menuEnabled === false ?
                                    (
                                        <div className="nav-drop-menu">
                                            <button onClick={ () => { this.setState( { menuEnabled: true } ) } }>+</button>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="nav-drop-menu">
                                            <button onClick={ () => { this.setState( { menuEnabled: false } ) } }>-</button>
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/login">ToDo App</Link></li>
                                                <li><a href="https://github.com/zacoope1">Github</a></li>
                                                <li><a href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/" >LinkedIn</a></li>
                                                <li><a href="https://zacharyacooper.com">Capstone</a></li>
                                            </ul>
                                        </div>
                                    )
                                )
                                :
                                (
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/login">ToDo App</Link></li>
                                        <li><a href="https://github.com/zacoope1">Github</a></li>
                                        <li><a href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/" >LinkedIn</a></li>
                                        <li><a href="https://zacharyacooper.com">Capstone</a></li>
                                    </ul>
                                )
                            }
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/register">
                                <Register />
                            </Route>
                        </Switch>
                    </div>
              </Router>
            );
        }
}

export default Home;