import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/login.css';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {hasError: false, errorMessage: ""};
    }

    render() {
        return(
            <div className="page-content-wrapper">
                <div className="Form-Content">
                    <h2>Login</h2>
                    { this.state.hasError? <div className="error-message"><p>{this.state.errorMessage}</p></div> : null }
                    <form>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Email</label><br/>
                                <input type ="text" name="email" placeholder="email"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Password</label><br/>
                                <input type ="password" name="password" placeholder="password"></input>
                            </div>
                        </div>
                        <div className="btn-center">
                            <p className="btn" onClick={() => {console.log("Hi")}}>Submit</p>
                            <Link className="link" to="/register">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;