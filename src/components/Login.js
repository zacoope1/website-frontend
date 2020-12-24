import React from 'react';
import '../assets/css/login.css';

export default function Login(){
    return(
        <div>
            <h1>Login</h1>
            <div>
                <form>
                    <label>Email</label>
                    <input type ="text" name="email" placeholder="email"></input>
                    <input type ="password" name="password" placeholder="password"></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}