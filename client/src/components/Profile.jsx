import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import UserMessages from "./UserMessages"; 
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const{ user, isAuthenticated, isLoading } = useAuth0();
  //  mock user data 
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    picture: "user-avatar.jpg", // path to the user's avatar image
  };

  // Define mock bio and skills data
  const mockBio = "I am a web developer passionate about coding.";
  const mockSkills = ["HTML", "CSS", "JavaScript"];

  // mock badge data
  const mockBadges = [
    { name: "Badge 1", icon: "badge1-icon.png" },
    { name: "Badge 2", icon: "badge2-icon.png" },
    //  more badge here as needed
  ];

  // mock message data ( remove once users are made )
  const mockMessages = [
    {
      id: 1,
      user: "CodeMaster",
      content: "Hello fellow code wrangler! How's your debugging journey going?",
      timestamp: "2023-10-03T12:00:00Z",
    },
    {
      id: 2,
      user: "SyntaxSorcerer",
      content: "Ahoy there! Remember, semicolons are like a knight's armor in the JavaScript kingdom.",
      timestamp: "2023-10-03T12:05:00Z",
    },
    {
      id: 3,
      user: "BugHunter",
      content: "Bug discovered! Time to put on my Sherlock Holmes hat and hunt it down.",
      timestamp: "2023-10-03T12:10:00Z",
    },
    {
      id: 4,
      user: "Pythonista",
      content: "Python is like a snake, it slithers through code effortlessly.",
      timestamp: "2023-10-03T12:15:00Z",
    },
    {
      id: 5,
      user: "HTMLHero",
      content: "HTML tags are my building blocks, and the web is my playground!",
      timestamp: "2023-10-03T12:20:00Z",
    },
  ];
  
  // manage dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //  manage user comments
  const [comments, setComments] = useState([]);

  // fetch mock user comments (replace with actual API request as mention above)
  const fetchComments = async () => {
    try {
      // mock fetching comments from an API
      const response = await fetch("/api/comments"); // actual API endpoint here
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  //  fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  //  manage the new message input
  const [newMessage, setNewMessage] = useState("");

  // handle changes in the new message input field
  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  // handle submitting a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return; // Don't send empty messages
    }

    // send the message to the server here
    // For development purposes, add the message to the mockMessages array or ill forget
    const newMessageObj = {
      id: comments.length + 1, // (replace with real ID generation)
      user: "CurrentUser", // actual username or user ID
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    // state to include the new message
    setComments([...comments, newMessageObj]);

    // Clear the input field
    setNewMessage("");
  };

  return (
    <div>
      {/*  Header component */}
      <Header />

      {/* Main content  */}
      <main
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } p-4`}
      >
        <section className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Profile</h1>
          <div className="bg-gray-300 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            {/* User avatar */}
            <img
              src={mockUser.picture}
              alt={mockUser.name}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold mb-2">{mockUser.name}</h2>
            <p>{mockUser.email}</p>
          </div>
        </section>

        {/* Bio and Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            <p>{mockBio}</p>
          </div>
          <h2 className="text-lg font-semibold mb-2 mt-4">Skills</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            {mockSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Badge section */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Badges</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            {mockBadges.map((badge, index) => (
              <div key={index} className="flex items-center mb-2">
                <img src={badge.icon} alt={badge.name} className="w-6 h-6 mr-2" />
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Progress section */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Progress Tracking</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            {/* Progress content */}
          </div>
        </section>

        {/* Achievement */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Achievements</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            {/* Achievement content */}
          </div>
        </section>

        {/* User messages  */}
<section className="mb-4">
  <h2 className="text-lg font-semibold mb-2">User Messages</h2>
  <UserMessages
    messages={comments}
    newMessage={newMessage}
    handleNewMessageChange={handleNewMessageChange}
    handleSendMessage={handleSendMessage}
  />
</section>

{/* Mock Messages section (placeholder) */}
<section className="mb-4">
  <h2 className="text-lg font-semibold mb-2">Mock Messages</h2>
  <div className="bg-gray-300 p-4 rounded-lg">
    {mockMessages.map((message) => (
      <div key={message.id} className="mb-2">
        <p className="font-semibold">{message.user}</p>
        <p>{message.content}</p>
        <p className="text-gray-500">{message.timestamp}</p>
      </div>
    ))}
  </div>
</section>
      </main>

      {/* Dark Mode **neon mode tba** */}
      <button
        className={`${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        } py-2 px-4 rounded-md mt-4`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Profile;
