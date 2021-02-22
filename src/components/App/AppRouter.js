import React from 'react';
import Login from './Login';
import {logOut} from '../../api/Actions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {setCookie} from '../../common/cookie/cookie';
import { printDebug } from '../../common/DebugFunctions';
import '../../assets/css/app.css';

export default class AppRouter extends React.Component {

    constructor() {
        super();
        this.state = {isLoggedIn: false, sessionUuid: null}
        this.logIn = this.toggleLogIn.bind(this);
    }

    toggleLogIn(response, cookiePresent){
        this.setState({isLoggedIn: true, sessionUuid: response.sessionUuid, userUuid: response.userUuid});
        if(!cookiePresent){
            printDebug("Creating cookies for suid and uid.");
            setCookie('suid', this.state.sessionUuid, 7);
            setCookie('uid', this.state.userUuid, 7);
        }
    }

    performLogOut(){

        //Delete session in backend
        logOut(this.state.sessionUuid);
        //Delete Cookies
        document.cookie = "suid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // eslint-disable-next-line no-restricted-globals
        location.href = "/app";

    }

    render(){

        if(!this.state.isLoggedIn){
            return (
                <Login toggleLogIn={this.logIn} />    
            )
        }
        else {
            return (
                    <Router>
                        <div className="Page-Wrapper">
                            <div className="app-nav">
                                <Link to="/app/home">Home</Link>
                                <Link to="/app/forum">Forum</Link>
                                <Link to="/app/chat">Chat App</Link>
                                <button onClick={() => this.performLogOut()}>Log Out</button>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/app/home">
                                <h1>Home</h1>
                            </Route>
                            <Route path="/app/forum">
                                <h1>Forum</h1>
                            </Route>
                            <Route path="/app/chat">
                                <h1>Chat</h1>
                            </Route>
                        </Switch>
                    </Router>
            )
        }

    }

}

