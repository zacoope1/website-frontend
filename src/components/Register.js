import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component{

    constructor(){
        super();
        this.state = {hasError: false, errorMessage: ""};
    }

    render(){
        return(
            <div className="page-content-wrapper">
                <h2>Sign Up</h2>
                { this.state.hasError === true ? <div className="error-message"><p>{this.state.errorMessage}</p><br/></div> : null }
                <form>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>Email</label><br/>
                            <input type ="text" name="email" placeholder="email"></input>
                        </div>
                    </div>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>Username</label><br/>
                            <input type ="text" name="username" placeholder="username"></input>
                        </div>
                    </div>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>First Name</label><br/>
                            <input type ="text" name="firstName" placeholder="first name"></input>
                        </div>
                    </div>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>Last Name</label><br/>
                            <input type ="text" name="lastName" placeholder="last name"></input>
                        </div>
                    </div>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>Password</label><br/>
                            <input type ="password" name="password" placeholder="password"></input>
                        </div>
                    </div>
                    <div className="form-input-center">
                        <div className="form-items">
                            <label>Re-Type Password</label><br/>
                            <input type ="password" name="retypePassword" placeholder="re-type password"></input>
                        </div>
                    </div>
                    <div className="btn-center">
                        <button type="button">Submit</button>
                        <Link to="/login">Back</Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default Register