import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../components/AboutMe/Home';
import App from '../components/App/App';
import Register from '../components/App/Register';

export default class SiteRouter extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/app">
                        <App />
                    </Route>
                    <Route exact path="/app/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        );
    }

}