import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
// import LoginButton from "./LoginButton";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = formState;
      const mutationResponse = await login({
        variables: { email, password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-yellow-400 border-double border-4 border-sky-500 p-10 rounded-lg ">
        <h1 className="text-3xl text-center text-sky-500 font-bold mb-5 border-b-4 border-sky-500">
          Login
        </h1>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="block font-medium text-black">
              <h3></h3>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-md font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Your email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-md font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Password"
                required
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{ cursor: 'pointer' }}
                className="bg-black text-white py-2 px-4 rounded-md border-4 border-sky-500 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-800 hover:text-black"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2 mt-2 text-black ">
                Don't have an account?
              </p>
              <a
                href="/register"
                type="submit"
                style={{ cursor: 'pointer' }}
                className="bg-black text-white py-2 px-4 rounded-md border-4 border-sky-500 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-800 hover:text-black"
              >
                Register
              </a>
            </div>
          </form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
}

export default Login;
