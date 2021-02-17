import React from 'react';
import Login from './Login';
import '../../assets/css/app.css';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = { isLoggedIn: false, userData: null}
        this.logIn = this.toggleLogIn.bind(this);
    }

    componentDidMount(){
        // TODO Check for session cookie
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    toggleLogIn(data){
        this.setState({isLoggedIn: true, userData: data});
        //TODO Write Session Cookie
    }

    render(){

        if(!this.state.isLoggedIn){
            return (
                <Login toggleLogIn={this.logIn} />    
            )
        }
        else {
            return (
                <div className="Page-Wrapper">
                    <div className="Content">
                        {"Welcome, " + this.state.userData.firstName + "!"}
                    </div>
                </div>
            )
        }

    }

}

