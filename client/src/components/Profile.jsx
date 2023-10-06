import React from "react";
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

const Profile = () => {
  // Define mock user data (use this during development)
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    // Add more mock data as needed
  };

  // Define mock badges (use this during development)
  const mockBadges = [
    { name: "HTML Expert", icon: "html-badge.png" },
    { name: "CSS Pro", icon: "css-badge.png" },
    // Add more mock badges as needed
  ];

  // Use a flag to determine whether to use mock data or real user data
  const isDevelopmentMode = true; // Set to true during development

  return (
    <div>
      {/* Include the Header component */}
      <Header />

      {/* Main content of the profile page */}
      <main className="bg-white text-black p-4">
        <section className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Profile</h1>
          <div className="bg-gray-300 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Name:</span>
                {isDevelopmentMode ? mockUser.name : "Loading..."}
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Email:</span>
                {isDevelopmentMode ? mockUser.email : "Loading..."}
              </div>
            </div>
          </div>
        </section>

        {/* Badge display section */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Badges</h2>
          <div className="bg-gray-300 p-4 rounded-lg">
            <div className="flex flex-wrap -m-2">
              {isDevelopmentMode
                ? mockBadges.map((badge, index) => (
                    <div key={index} className="m-2">
                      <img
                        src={badge.icon}
                        alt={badge.name}
                        className="w-16 h-16"
                      />
                      <p className="text-center">{badge.name}</p>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </section>
        
        {/* Progress tracking section */}
        {/* ... (previous code for progress tracking) */}
        
        {/* Achievement section */}
        {/* ... (previous code for achievements) */}
      </main>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Profile;
