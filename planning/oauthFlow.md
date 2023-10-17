# oauth planning

## outline

Integrate Google API OAuth for authentication:

Register your application with the Google API Console to obtain client credentials (client ID and client secret). - done

Set up the necessary routes and endpoints to handle the OAuth flow.
Redirect the user to the Google OAuth consent screen to request permission to access their profile information.

Receive the authorization code from Google and exchange it for an access token and refresh token.
Use the access token to retrieve the user's profile information from Google.

Generate a JWT token for the authenticated user and include it in the response.

By combining local JWT authentication with Google API OAuth, you can provide users with the flexibility to authenticate using either method.

## routing

Create a /auth/google route to initiate the Google OAuth flow.

Redirect the user to the Google OAuth consent screen by constructing the authorization URL with your client ID, scopes, and redirect URI.

Handle the callback from Google after the user grants permission.

Exchange the authorization code for an access token and refresh token by making a server-to-server request to Google's token endpoint.

## exchange code for tokens

Use the access token obtained in the previous step to make API requests to retrieve the user's profile information, such as their email or name.

Verify the integrity of the received information and ensure it matches the user in your system.

## generate jwt token for user

Include the JWT token in the response to the client, typically as a cookie or in the response body.

The client can then include this token in subsequent requests to authenticate and authorize the user.