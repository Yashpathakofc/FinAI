import React, { useState } from "react";

// Define the types for the component props
interface SignUpProps {
  onClose: () => void; // Close handler to hide the SignUp form
}

const SignUp: React.FC<SignUpProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is being submitted

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form inputs
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); // Disable submit button to prevent multiple submissions

      // Simulate an API call (you can replace this with actual API logic)
      try {
        // Replace with actual submission logic
        console.log("Form submitted:", formData);
        // Simulate success:
        setTimeout(() => {
          setIsSubmitting(false); // Re-enable submit button after submission
          onClose(); // Close the form after successful submission
        }, 2000);
      } catch (error) {
        console.error("Error during form submission:", error);
        setIsSubmitting(false); // Re-enable submit button if error occurs
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
          onClick={onClose} // Use the passed onClose function here
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
