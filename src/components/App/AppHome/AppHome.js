import React from 'react';
import {
    getActiveSessions,
    clearActiveSessions,
    logOut
} from '../../../api/Actions'
import './AppHome.css';

export default class AppHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeSessions: []}
    }

    async componentDidMount() {
        const response = await getActiveSessions(this.props.userInfo.userUuid);
        const responseBody = await response.json();

        if(response.status === 200) {
            this.setState({activeSessions: responseBody.activeSessions});
        }
    }

    getSessions(){
        return this.state.activeSessions.map((session) => {
            return (
                <div className="Session-Element">
                    <p>Uuid: {session.sessionUuid}</p>
                    <p>Date: {session.sessionCreateDate}</p>
                </div>
            )
        });
    }

    async clearSessions() {
        const response = await clearActiveSessions(this.props.userInfo.userUUid);
        if(response.status === 200){
            this.setState({activeSessions: []});
            //Log out of current session
            await logOut(this.state.sessionUuid);
            //Delete Cookies
            document.cookie = "suid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // eslint-disable-next-line no-restricted-globals
            location.href = "/app";
        }
    }

    render() {
        return (
            <div className="App-Home-Page-Content">
                <h2>Welcome, {this.props.userInfo.firstName}!</h2>
                <div>
                    <h3>Session List</h3>
                    {this.state.activeSessions.length > 0 ? this.getSessions() : null}
                    <button onClick={() => {this.clearSessions();}}>Clear Active Sessions</button>
                </div>
            </div>
        );
    }

}