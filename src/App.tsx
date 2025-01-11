import { useState } from "react";  // Remove 'React' import as it's not needed anymore
import './App.css';
import Login from './components/Login';
import Navbar from "./components/navbar";
import SignUp from './components/SignUp';

// Importing additional components
import ExpertFinancialServices from './components/ExpertFinancialServices';
import FinancialServices from './components/FinancialServices';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import JiaChatbot from './components/JiaChatbot';
import Process from './components/Process';
import Reviews from './components/Reviews';
import SuccessStories from './components/SuccessStories';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  // State to control the visibility of the Login component
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // State to control the visibility of the SignUp component
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  // Function to toggle the visibility of the Login component
  const toggleLoginVisibility = () => {
    setIsLoginVisible(!isLoginVisible);
    // Hide SignUp if Login is opened
    if (!isLoginVisible) setIsSignUpVisible(false);
  };

  // Function to toggle the visibility of the SignUp component
  const toggleSignUpVisibility = () => {
    setIsSignUpVisible(!isSignUpVisible);
    // Hide Login if SignUp is opened
    if (!isSignUpVisible) setIsLoginVisible(false);
  };

  return (
    <>
      {/* Pass toggle functions to Navbar to control Login and SignUp visibility */}
      <Navbar 
        toggleLogin={toggleLoginVisibility} 
        toggleSignUp={toggleSignUpVisibility} 
      />

      {/* Conditionally render the Login component based on state */}
      {isLoginVisible && <Login onClose={toggleLoginVisibility} />}

      {/* Conditionally render the SignUp component based on state */}
      {isSignUpVisible && (
        <div className="relative z-20">
          <SignUp onClose={toggleSignUpVisibility} />
        </div>
      )}

      {/* Other components */}
      <HeroSection />
      <WhyChooseUs />
      <FinancialServices />
      <ExpertFinancialServices />
      <Process />
      <Reviews />
      <SuccessStories />
      <Team />
      <JiaChatbot />
      <Footer />
    </>
  );
}

export default App;
