<<<<<<< HEAD
import React from "react"
import {useAuth0} from "@auth0/auth0-react"

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0()

  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton
=======

import React from 'react';

function Login() {
  return (
    // Outer container 
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {/* inner container */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Login page title */}
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Your email"
              required
            />
          </div>
          {/* Password input field  with hidden eye */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Password"
              required
            />
          </div>
          {/* Login button */}
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
>>>>>>> 0e7ab8d60cea5755d63d9a703c92ec2828f9ba15
