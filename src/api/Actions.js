import {
    API_URL, 
    CREATE_USER_ENDPOINT, 
    USER_LOGIN_ENDPOINT, 
    USER_LOGOUT_ENDPOINT,
    GET_ACTIVE_SESSIONS_ENDPOINT,
    CLEAR_ACTIVE_SESSIONS_ENDPOINT,
    SESSION_LOGIN_ENDPOINT
} from '../api/Endpoints';

export async function signUp(body){
    const response = await fetch(API_URL + CREATE_USER_ENDPOINT, {
        "mode": "cors",
        "method": "POST",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify({...body})
    })
    return response;
}

export async function logInAndCreateSession(username, password) {
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

export async function logInWithSession(sessionUuid, userUuid) {
    const response = await fetch(API_URL + SESSION_LOGIN_ENDPOINT + "?sessionUuid=" + sessionUuid + "&userUuid=" + userUuid, {
        "mode": "cors",
        "method": "GET",
        "headers": new Headers({'content-type': 'application/json'}),
    })
    return response;
}

export async function getActiveSessions(userUuid){
    const response = await fetch(API_URL + GET_ACTIVE_SESSIONS_ENDPOINT + "?userUuid=" + userUuid, {
        "mode": "cors",
        "method": "GET",
        "headers": new Headers({'content-type': 'application/json'}),
    })
    return response;
}

export async function clearActiveSessions(userUuid){
    const response = await fetch(API_URL + CLEAR_ACTIVE_SESSIONS_ENDPOINT + "?userUuid=" + userUuid, {
        "mode": "cors",
        "method": "GET",
        "headers": new Headers({'content-type': 'application/json'}),
    })
    return response;
}

export async function logOut(sessionUuid){
    const response = await fetch(API_URL + USER_LOGOUT_ENDPOINT, {
        "mode": "cors",
        "method": "POST",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify({
            sessionUuid
        })
    })
    return response;
}