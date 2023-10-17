import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import { useParams, Navigate } from 'react-router-dom';
import Auth from '../../utils/Auth';
import UserMessages from './UserMessages';
import Donation from './Donation';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { username: userParam } = useParams();

  // if (!userParam) {
  //   return <Navigate to="/me" />;
  //}

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  //if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //return <Navigate to="/me" />;
  //}

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div>
        <h4>
          You need to be logged in to see this. Use the navigation links above
          to sign up or log in!
        </h4>
      </div>
    );
  }

  //  mock user data
  /*const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    picture: '../../images/mockpfp.png', // path to the user's avatar image
  };*/

  // Define mock bio and skills data
  const mockBio = 'I am a web developer passionate about coding.';
  const mockSkills = ['HTML', 'CSS', 'JavaScript'];

  // mock badge data
  const mockBadges = [
    { name: 'Badge 1', icon: 'badge1-icon.png' },
    { name: 'Badge 2', icon: 'badge2-icon.png' },
    //  more badge here as needed
  ];

  //message data ( remove once users are made )
  /*const mockMessages = [
    {
      id: 1,
      user: 'CodeMaster',
      content:
        "Hello fellow code wrangler! How's your debugging journey going?",
      timestamp: '2023-10-03T12:00:00Z',
    },
    {
      id: 2,
      user: 'SyntaxSorcerer',
      content:
        "Ahoy there! Remember, semicolons are like a knight's armor in the JavaScript kingdom.",
      timestamp: '2023-10-03T12:05:00Z',
    },
    {
      id: 3,
      user: 'BugHunter',
      content:
        'Bug discovered! Time to put on my Sherlock Holmes hat and hunt it down.',
      timestamp: '2023-10-03T12:10:00Z',
    },
    {
      id: 4,
      user: 'Pythonista',
      content: 'Python is like a snake, it slithers through code effortlessly.',
      timestamp: '2023-10-03T12:15:00Z',
    },
    {
      id: 5,
      user: 'HTMLHero',
      content:
        'HTML tags are my building blocks, and the web is my playground!',
      timestamp: '2023-10-03T12:20:00Z',
    },
  ];*/

  //  manage user comments
  /*const [comments, setComments] = useState([]);

  // fetch mock user comments (replace with actual API request as mention above)
  const fetchComments = async () => {
    try {
      // mock fetching comments from an API
      const response = await fetch('/api/comments'); // actual API endpoint here
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  //  fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  //  manage the new message input
  const [newMessage, setNewMessage] = useState('');

  // handle changes in the new message input field
  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  // handle submitting a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return; // Don't send empty messages
    }

    // send the message to the server here
    // For development purposes, add the message to the mockMessages array or ill forget
    const newMessageObj = {
      id: comments.length + 1, // (replace with real ID generation)
      user: 'CurrentUser', // actual username or user ID
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    // state to include the new message
    setComments([...comments, newMessageObj]);

    // Clear the input field
    setNewMessage('');
  };*/

  return (
    <div>
      {/* Main content  */}
      <h2 className="text-center text-white mb-3">
        Welcome {user.username} to your CYBERSCRIPT!
      </h2>
      <main className="flex flex-col items-center">
        <div className="flex">
          <div className="p-3 mb-4 bg-black shadow-inner shadow-inner-white shadow-cyber-blue w-fit rounded-lg border border-cyber-blue">
            <div className="flex flex-col items-center p-4">
              <h2 className="text-lg text-white font-semibold mb-2">
                USER_INFORMATION
              </h2>
              {/* User avatar */}
              <div className="w-60 text-white border-2 border-cyber-pink rounded-2xl">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="rounded-2xl"
                />
              </div>
              <h2 className="text-xl text-white font-semibold mb-2">
                {user.username}
              </h2>
              <p className="text-xl text-white font-semibold mb-2">
                {user.email}
              </p>
            </div>
            {/* Bio and Skills */}
            <div className="p-3 mb-4 bg-black shadow-inner shadow-inner-white shadow-cyber-blue w-fit rounded-lg border border-cyber-blue">
              <h2 className="text-lg text-white font-semibold mb-2">BIO_</h2>
              <div className=" p-4 ">
                <p className="text-lg text-white font-semibold mb-2">
                  {mockBio}
                </p>
              </div>
              <h2 className="text-lg text-white font-semibold mb-2 mt-4">
                SKILLS_
              </h2>
              <div className=" p-4 ">
                {mockSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Badge div */}
          <div className="flex flex-col justify-end ml-5">
            <div className="p-3 mb-4 bg-black shadow-inner shadow-inner-white shadow-cyber-blue w-fit rounded-lg border border-cyber-blue">
              <h2 className="text-lg text-white font-semibold mb-2">BADGES_</h2>
              <div className=" p-4 ">
                {mockBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center text-white mb-2"
                  >
                    <img
                      src={badge.icon}
                      alt={badge.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress div */}
            <div className="p-3 mb-4 bg-black shadow-inner shadow-inner-white shadow-cyber-blue w-fit rounded-lg border border-cyber-blue">
              <h2 className="text-lg font-semibold text-white mb-2">
                PROGRESS_TRACKING
              </h2>
              <div className=" p-4 ">{/* Progress content */}</div>
            </div>

            {/* Achievement */}
            <div className="p-3 mb-4 bg-black rounded-lg border  border-cyber-blue">
              <h2 className="text-lg text-white font-semibold mb-2">
                ACHIEVEMENTS_
              </h2>
              <div className=" p-4 ">{/* Achievement content */}</div>
            </div>
          </div>
        </div>

        {/* Mock Messages div (placeholder) */}
        <div className="p-3 mb-4 bg-black w-fit rounded-lg border  border-cyber-blue">
          <h2 className="text-lg text-white font-semibold mb-2">
            MOCK_MESSAGES
          </h2>
          <div className=" p-4 ">
            {user.messages.map((message) => (
              <div key={message._id} className="mb-2">
                <p className="font-semibold">{message.messageAuthor}</p>
                <p>{message.messageText}</p>
                <p className="text-gray-500">{message.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

/*{ User messages  }
<div className="p-3 mb-4 bg-black w-fit rounded-lg border  border-cyber-blue">
<h2 className="text-lg font-semibold mb-2">USER_MESSAGES</h2>
<UserMessages
  messages={comments}
  newMessage={newMessage}
  handleNewMessageChange={handleNewMessageChange}
  handleSendMessage={handleSendMessage}
/>
</div>

{
   Dark Mode **neon mode tba**
      <button
        className={`${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        } py-2 px-4 rounded-md mt-4`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button> 
}
// className={`${
//           isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
//         } p-4`}
*/
