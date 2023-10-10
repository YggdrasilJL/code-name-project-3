import auth0 from 'auth0-js';
import dotenv from 'dotenv';
dotenv.config();

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: 'http://localhost:3000/callback',
            audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
            responseType: 'token id_token',
            scope: 'openid email'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.authFlag = 'isLoggedIn';
    }

    login() {
        this.auth0.authorize();
    }

    getIdToken() {
        return this.idToken;
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.setSession(authResult);
                resolve();
            });
        })
    }

    setSession(authResult) {
        this.idToken = authResult.idToken;
        console.log(this.idToken);
        // set the time that the id token will expire at
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    }

    logOut() {
        localStorage.setItem(this.authFlag, JSON.stringify(false));
        this.auth0.logout({
            returnTo: 'http://localhost:3000',
            clientID: 'LUft9iOEONnQilP8mFDdmiBHdNljGJ2u',
        });
    }


    silentAuth() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);
                this.setSession(authResult);
                resolve();
            });
        });
    }

    isAuthenticated() {
        return JSON.parse(localStorage.getItem(this.authFlag));
    }

    setSession(authResult) {
        this.idToken = authResult.idToken;
        localStorage.setItem(this.authFlag, JSON.stringify(true));
    }

    silentAuth() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);
                this.setSession(authResult);
                resolve();
            });
        });
    }
}

const auth = new Auth();

export default auth;