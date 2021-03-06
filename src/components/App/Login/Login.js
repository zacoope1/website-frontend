import React from 'react';
import {Link} from 'react-router-dom';
import {logInAndCreateSession, logInWithSession} from '../../../api/Actions';
import {printDebug} from '../../../common/DebugFunctions';
import {getCookie} from '../../../common/cookie/cookie';
import '../../../assets/css/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null,
            hasError: false,
            errorMessage: "",
            username: "",
            password: ""
        };
    }

    async componentDidMount() {

        let cookie = {
            sessionUuid: getCookie('suid'),
            userUuid: getCookie('uid'),
            cookiePresent: true
        }

        if (cookie.sessionUuid != null && cookie.userUuid != null) {
            if (cookie.sessionUuid.length > 0 && cookie.userUuid.length > 0) {
                const response = await logInWithSession(cookie.sessionUuid, cookie.userUuid);
                const responseBody = await response.json();
                if (response.status === 200){
                    this.props.toggleLogIn(responseBody, cookie, cookie.cookiePresent);
                }
                else {
                    this.setState({hasError: true, errorMessage: "Failure to login. Please try again!"})
                    document.cookie = "suid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
            }
            else {
                printDebug("Session Cookie Not Found!"); 
            }
        }
        else {
            printDebug("Session Cookie Not Found!");
        }

    }

    sanitizeInput(input) {
        if(input.match(/^[0-9a-zA-Z]+$/)){
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <div className="page-content-wrapper">
                <div className="form-content">
                    <h2>Login</h2>
                    { this.state.hasError? <div className="error-message"><p>{this.state.errorMessage}</p></div> : null }
                    <form>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Email</label><br/>
                                <input type ="text" name="email" onChange={(e) => {this.setState({username: e.target.value});}} placeholder="email"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Password</label><br/>
                                <input type ="password" name="password" onChange={(e) => {this.setState({password: e.target.value});}} placeholder="password"></input>
                            </div>
                        </div>
                        <div className="btn-center">
                            <p className="btn" onClick={() => {this.performLogin()}}>Submit</p>
                            <Link className="link" to="/app/register">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    async performLogin() {
        this.setState({hasError: false, errorMessage: ""});
        if(this.sanitizeInput(this.state.username) && this.sanitizeInput(this.state.password)){
            const response = await logInAndCreateSession(this.state.username, this.state.password);
            const responseBody = await response.json();
            if(response.status === 200){
                console.log(responseBody);
                this.props.toggleLogIn(responseBody.userInfo, responseBody.sessionInfo , false);
            }
            else{
                this.setState({hasError: true, errorMessage: responseBody.errorMessage});
            }
        }
        else {
            this.setState({hasError: true, errorMessage: "Fields must only consist of letters and numbers!"});
        }

    }

}

export default Login;