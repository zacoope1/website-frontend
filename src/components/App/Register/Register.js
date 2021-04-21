import React from 'react';
import {Link} from 'react-router-dom';
import {signUp} from '../../../api/Actions';
import '../../../assets/css/login.css';

class Register extends React.Component{

    constructor(){
        super();
        this.state = {
            response: {},
            hasError: false,
            errorMessage: "",
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
        };
    }

    componentDidUpdate(){
    }

    render(){
        return(
            <div className="page-content-wrapper">
                <div className="form-content">
                    <h2>Sign Up</h2>
                    { this.state.hasError === true ? <div className="error-message"><p>{this.state.errorMessage}</p></div> : null }
                    <form>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Email</label><br/>
                                <input type ="text" name="email" onChange={(e) => {this.setState({email: e.target.value})}} placeholder="email"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Username</label><br/>
                                <input type ="text" name="username" onChange={(e) => {this.setState({username: e.target.value})}} placeholder="username"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>First Name</label><br/>
                                <input type ="text" name="firstName" onChange={(e) => {this.setState({firstName: e.target.value})}} placeholder="first name"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Last Name</label><br/>
                                <input type ="text" name="lastName" onChange={(e) => {this.setState({lastName: e.target.value})}} placeholder="last name"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Password</label><br/>
                                <input type ="password" name="password" onChange={(e) => {this.setState({password: e.target.value})}} placeholder="password"></input>
                            </div>
                        </div>
                        <div className="form-input-center">
                            <div className="form-items">
                                <label>Re-Type Password</label><br/>
                                <input type ="password" name="retypePassword" onChange={(e) => {this.setState({password2: e.target.value})}} placeholder="re-type password"></input>
                            </div>
                        </div>
                        <div className="btn-center">
                            <p className="btn" onClick={() => {this.performSignUp()}}>Submit</p>
                            <Link className="link" to="/app">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    validateForm() {

        if (!this.sanitizeInput(this.state.username) || !this.sanitizeInput(this.state.firstName) || !this.sanitizeInput(this.state.lastName) 
            || !this.sanitizeInput(this.state.password) || !this.sanitizeInput(this.state.password2)) {
            this.setState({errorMessage: "Fields must consist only of letters and numbers."});
            return false
        }

        if(this.state.username.length <= 0 || this.state.email.length === 0 || this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.password.length === 0 || this.state.password2.length === 0){
            this.setState({errorMessage: "One or more fields are empty. Please complete the form."});
            return false;
        }

        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))){
            this.setState({errorMessage: "Please enter a valid email under email field."});
            return false;
        }

        if(this.state.password !== this.state.password2){
            this.setState({errorMessage: "Passwords do not match"});
            return false
        }

        return true;
    }

    sanitizeInput(input) {
        if(input.match(/^[0-9a-zA-Z]+$/)){
            return true;
        }
        else {
            return false;
        }
    }

    async performSignUp() {
        this.setState({errorMessage: "", hasError: false})
        if(this.validateForm()){
            let body = {
                username: this.state.username,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
            }

            const response = await signUp(body);
            const responseBody = await response.json();

            if(response.status === 201) {
                this.setState({hasError: true, errorMessage: "Account Created!"})
            }
            else {
                this.setState({hasError: true, errorMessage: responseBody.errorMessage})
            }
        }
        else {
            this.setState({hasError: true});
        }
        
    }

}

export default Register