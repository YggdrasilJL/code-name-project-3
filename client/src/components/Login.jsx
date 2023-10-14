import React from "react"
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
    // Outer container 
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {/* inner container */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Login page title */}
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" form-input mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Your email"
              required
              value={formState.email}
              onChange={handleChange}
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
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          {/* Login button */}
          <button
            type="submit"
            style={{ cursor: 'pointer' }}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
          >
            Login
          </button>
        </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )};
      </div>
    </div>
  );
};

export default Login




