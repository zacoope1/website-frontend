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
                        <button type="button">Submit</button>
                        <Link to="/register">Sign up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;