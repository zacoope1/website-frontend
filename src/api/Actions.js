import {API_URL, CREATE_USER_ENDPOINT, USER_LOGIN_ENDPOINT} from '../api/Endpoints';

// TODO CHANGE SPRINGBOOT SERVER TO SERVE OVER HTTPS
export function logIn(username, password) {
    fetch(API_URL + USER_LOGIN_ENDPOINT, {
    "method": "POST",
    "headers": {},
    "body": JSON.stringify({
        username,
        password
    })
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
        return err; 
    });
}