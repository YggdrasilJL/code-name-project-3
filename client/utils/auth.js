import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();


/*import auth0 from 'auth0-js';

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: '<YOUR_AUTH0_DOMAIN>',
            clientID: '<YOUR_AUTH0_CLIENT_ID>',
            redirectUri: 'http://localhost:3000/callback',
            audience: 'https://<YOUR_AUTH0_DOMAIN>/userinfo',
            responseType: 'token id_token',
            scope: 'openid email'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.authFlag = 'isLoggedIn';
    }

import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

=======
// import auth0 from 'auth0-js';

// class Auth {
//     constructor() {
//         this.auth0 = new auth0.WebAuth({
//             domain: '<YOUR_AUTH0_DOMAIN>',
//             clientID: '<YOUR_AUTH0_CLIENT_ID>',
//             redirectUri: 'http://localhost:3000/callback',
//             audience: 'https://<YOUR_AUTH0_DOMAIN>/userinfo',
//             responseType: 'token id_token',
//             scope: 'openid email'
//         });

//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleAuthentication = this.handleAuthentication.bind(this);
//         this.isAuthenticated = this.isAuthenticated.bind(this);
//         this.authFlag = 'isLoggedIn';
//     }

//     login() {
//         this.auth0.authorize();
//     }

//     getIdToken() {
//         return this.idToken;
//     }

//     handleAuthentication() {
//         return new Promise((resolve, reject) => {
//             this.auth0.parseHash((err, authResult) => {
//                 if (err) return reject(err);
//                 if (!authResult || !authResult.idToken) {
//                     return reject(err);
//                 }
//                 this.setSession(authResult);
//                 resolve();
//             });
//         })
//     }

//     setSession(authResult) {
//         this.idToken = authResult.idToken;
//         console.log(this.idToken);
//         // set the time that the id token will expire at
//         this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
//     }

//     logOut() {
//         localStorage.setItem(this.authFlag, JSON.stringify(false));
//         this.auth0.logout({
//             returnTo: 'http://localhost:3000',
//             clientID: 'LUft9iOEONnQilP8mFDdmiBHdNljGJ2u',
//         });
//     }


//     silentAuth() {
//         return new Promise((resolve, reject) => {
//             this.auth0.checkSession({}, (err, authResult) => {
//                 if (err) return reject(err);
//                 this.setSession(authResult);
//                 resolve();
//             });
//         });
//     }

//     isAuthenticated() {
//         return JSON.parse(localStorage.getItem(this.authFlag));
//     }

//     setSession(authResult) {
//         this.idToken = authResult.idToken;
//         localStorage.setItem(this.authFlag, JSON.stringify(true));
//     }

//     silentAuth() {
//         return new Promise((resolve, reject) => {
//             this.auth0.checkSession({}, (err, authResult) => {
//                 if (err) return reject(err);
//                 this.setSession(authResult);
//                 resolve();
//             });
//         });
//     }
// }

// const auth = new Auth();

// export default auth;

import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}*/


