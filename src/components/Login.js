import React from 'react';
import {Link} from 'react-router-dom';
import {logIn} from '../api/Actions';
import '../assets/css/login.css';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {hasError: false, errorMessage: "", username: "", password: ""};
    }

    render() {
        return(
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
                            <Link className="link" to="/register">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    async performLogin(){
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            console.log(logIn(this.state.username, this.state.password));
        }
        else {
            this.setState({hasError: true, errorMessage: "ERROR: Username or Password field is blank. Please try again with a valid login."})
        }
    }
}

export default Login;