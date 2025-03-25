
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleAlreadyRegister = () => {
    navigate('/already-register');
  };

  return (
    
    <div className="home-container">
      
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Platform</h1>
        <p className="home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="button-group">
          <button
            onClick={handleCreateAccount}
            className="home-button create-account"
          >
            Create Account
          </button>
          <button
            onClick={handleAlreadyRegister}
            className="home-button already-register"
          >
            Already Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;