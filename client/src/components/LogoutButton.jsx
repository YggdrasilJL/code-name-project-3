import React from "react"
import auth from '../Auth';

const LogoutButton = () => {
    
    logout = () => {
        auth.logout();
        this.props.history.replace('/');
    };

    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                Log Out
            </button>
        )

    )
}

export default LogoutButton

