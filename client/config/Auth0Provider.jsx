import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const CustomAuth0Provider = (props) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            audience={audience}
            useRefreshTokens
            // Token storage option, `localstorage` gives the feature
            // to not log out your users when they close your application
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default CustomAuth0Provider;