import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
// dont change auth.js to capital because there may be other imports
import Auth from '../../utils/auth';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    if (formState.password !== formState.confirmPassword) {
      return console.error('Passwords do not match');
    }

    try {
      const { username, email, password } = formState;
      const { data } = await addUser({
        variables: {
          userData: {
            username,
            email,
            password,
          },
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 ">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md  dark:bg-gray-800 dark:border-gray-700">
          <div className="bg-yellow-400 border-4 border-sky-500 p-10 rounded-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-500 md:text-2xl mb-2 border-sky-500">
              Create an account
            </h1>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-sky-400 "
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className=" form-input bg-gray-50 border-4 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-sky-600 dark:placeholder-gray-400 dark:text-yellow-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="XX_Danger_Mike_XX"
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-sky-400"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className=" form-input bg-gray-50 border-4 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-sky-600 dark:placeholder-gray-400 dark:text-yellow-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Youremail.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-sky-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-sky-400"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className=" form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={formState.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="flex items-start"> */}
                {/* <div className="flex items-center h-5"> */}
                {/* <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    onChange={(event) => handleCheckboxChange(event.target.checked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark-bg-gray-700 dark-border-gray-600 dark-focus-ring-primary-600 dark-ring-offset-gray-800"
                    required
                  /> */}
                {/* </div> */}
                {/* <div className="ml-3 text-sm"> */}
                {/* <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark-text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-md text-primary-600 hover:underline dark-text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  // </label> */}
                {/* </div> */}
                {/* </div> */}
                <button
                  type="submit"
                  style={{ cursor: 'pointer' }}
                  className="w-full text-xl text-sky-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg px-5 py-2.5 text-center dark-bg-primary-600 dark-hover-bg-primary-700 dark-focus-ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm text-centered font-light text-gray-500 dark-text-gray-400">
                  Already have an account?{' '}
                  <a
                    href="/logn"
                    className="font-medium text-primary-600 hover:underline dark-text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            )}

            {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

//
