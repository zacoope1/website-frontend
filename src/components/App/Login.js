import React from 'react';
import {Link} from 'react-router-dom';
import {logIn} from '../../api/Actions';
import {printDebug} from '../../common/DebugFunctions';
import {getCookie} from '../../common/cookie/cookie';
import { useHistory } from "react-router-dom";
import '../../assets/css/login.css';

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

    componentDidMount() {

        let cookie = {
            sessionUuid: getCookie('suid'),
            userUuid: getCookie('uid'),
            cookiePresent: true
        }

        if (cookie.sessionUuid != null && cookie.userUuid != null) {
            if (cookie.sessionUuid.length > 0 && cookie.userUuid.length > 0) {
                this.props.toggleLogIn(cookie, cookie.cookiePresent);
                //TODO Figure out how to programatically route to '/app/home'
            }
            else {
                printDebug("Session Cookie Not Found!"); 
            }
        }
        else {
            printDebug("Session Cookie Not Found!");
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
        const response = await logIn(this.state.username, this.state.password);
        const responseBody = await response.json();
        if(response.status === 200){
            this.props.toggleLogIn(responseBody, false);
        }
        else {
            this.setState({hasError: true, errorMessage: responseBody.errorMessage})
        }
    }

}

export default Login;