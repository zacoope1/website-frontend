import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../components/AboutMe/Home';
import AppRouter from '../components/App/AppRouter';
import Register from '../components/App/Register/Register';

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
                        <AppRouter />
                    </Route>
                    <Route exact path="/app/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        );
    }

}