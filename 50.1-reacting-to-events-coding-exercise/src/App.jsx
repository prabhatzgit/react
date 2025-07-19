import React, { useState } from "react";

// Main App component
function App() {
  // State to manage user login status and data
  const [user, setUser] = useState({
    email: "",
    password: "",
    loggedIn: false,
  });

  // Function to handle the login button click
  const handleLogin = () => {
    // Update the user object with dummy data
    setUser({
      email: "user@example.com", // Dummy email
      password: "password123", // Dummy password
      loggedIn: true, // Set loggedIn to true
    });
    console.log("User logged in:", user); // Log the updated user state
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Login
        </h2>

        {/* Display login status */}
        {user.loggedIn ? (
          <div className="text-center text-green-600 text-lg mb-4">
            <p>You are logged in!</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <div className="text-center text-red-600 text-lg mb-4">
            <p>Please log in.</p>
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              // No need to fetch value for this task, so it's uncontrolled
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              // No need to fetch value for this task, so it's uncontrolled
            />
          </div>
          <button
            type="button" // Use type="button" to prevent form submission
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
