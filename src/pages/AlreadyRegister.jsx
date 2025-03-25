
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AlreadyRegister.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate("/account-setting");
  };

  return (
    <div className="login-container">

      <h2 className="login-title">
        Signing in to your <br /> PropX Account
      </h2>


      <div className="text-center">
        <h3 className="info-text">Lorem ipsum dolor sit amet</h3>
        <h3 className="info-text">consectetur adipiscing elit</h3>
      </div>


      <form className="login-form">

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="input-field"
            value="email@example.com"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
          />
        </div>


        <button type="button" className="btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>


      <div className="carousel-space">

      </div>
    </div>
  );
};

export default Login;
