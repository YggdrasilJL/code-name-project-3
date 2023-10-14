# Front end routing

## Routing

for logging in and logging out change the routing in client/src/App.jsx

element={Auth.isLoggedIn ? (<Login/>) : (<div>You’re not logged in</div> )}

or something to this effect

in the nav bar should have similar logic. if logged in show logout, if not show login.

