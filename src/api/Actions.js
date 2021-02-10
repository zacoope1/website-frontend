import {API_URL, CREATE_USER_ENDPOINT, USER_LOGIN_ENDPOINT} from '../api/Endpoints';

export async function signUp(body){
    const response = await fetch(API_URL + CREATE_USER_ENDPOINT, {
        "mode": "cors",
        "method": "POST",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify({...body})
    })
    return response;
}

export async function logIn(username, password) {
    const response = await fetch(API_URL + USER_LOGIN_ENDPOINT, {
        "mode": "cors",
        "method": "POST",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify({
            username,
            password
        })
    })
    return response;
}