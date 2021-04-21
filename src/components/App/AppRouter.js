import React from 'react';
import Login from './Login/Login';
import {logOut} from '../../api/Actions';
import AppHome from './AppHome/AppHome';
import {setCookie} from '../../common/cookie/cookie';
import { printDebug } from '../../common/DebugFunctions';
import '../../assets/css/app.css';
import './AppRouter.css';

export default class AppRouter extends React.Component {

    constructor() {
        super();
        this.state = {isLoggedIn: false, sessionUuid: null, userInfo: null}
        this.logIn = this.toggleLogIn.bind(this);
    }

    toggleLogIn(response, cookie, cookiePresent){

        this.setState({
            isLoggedIn: true,
            sessionUuid: cookie.sessionUuid, 
            userUuid: cookie.userUuid, 
            userInfo: response
        });

        if(!cookiePresent){
            printDebug("Creating cookies for suid and uid.");
            setCookie('suid', cookie.sessionUuid, 7);
            setCookie('uid', cookie.userUuid, 7);
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

    render() {
        if(!this.state.isLoggedIn){
            return (
                <Login toggleLogIn={this.logIn} />    
            )
        }
        else {
            return (
                <div className="Page-Wrapper">
                    <div className="app-nav">
                        <button onClick={() => this.performLogOut()}>Log Out</button>
                    </div>
                    <AppHome userInfo={this.state.userInfo} />
                </div>
            )
        }
    }
}

