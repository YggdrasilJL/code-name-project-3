import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({ isAuthenticated, history }) => {
    const logout = () => {
        auth.logout();
        history.replace('/');
    };

    return (
        isAuthenticated && (
            <button onClick={logout}>
                Log Out
            </button>
        )
    );
};

export default LogoutButton;

