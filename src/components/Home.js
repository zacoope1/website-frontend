import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import Login from './Login';

export default function Home() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/finances">Financial Tracker</Link></li>
                        <li><a href="https://github.com/zacoope1">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/zachary-cooper-92b2a5159/">LinkedIn</a></li>
                        <li><a href="https://zacharyacooper.com">Capstone Project</a></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/finances">
                        <Login />
                    </Route>
                </Switch>
            </div>
      </Router>
    );
}