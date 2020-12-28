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

export default function Home() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-logo">
                        <h2>Zachary A. Cooper</h2>
                        <h5>Software Engineer</h5>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">ToDo App</Link></li>
                        <li><a href="https://github.com/zacoope1">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/" >LinkedIn</a></li>
                        <li><a href="https://zacharyacooper.com">Capstone</a></li>
                    </ul>
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