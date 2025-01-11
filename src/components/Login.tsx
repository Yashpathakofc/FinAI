import React, { useState } from "react";

// Define the types for the component props
interface LoginProps {
  onClose: () => void; // Close handler to hide the Login form
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);  // State to control the visibility of the login box

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out both fields.");
      return;
    }

    // Example authentication logic (replace with real authentication logic)
    if (email === "test@example.com" && password === "password123") {
      alert("Login Successful!");
      setIsOpen(false); // Close the login box on successful login
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);  // Close the login box when the close button is clicked
    onClose(); // Notify the parent component that the modal is closed
  };

  if (!isOpen) return null;  // If isOpen is false, return nothing (i.e., do not render the login box)

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
          onClick={handleClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
