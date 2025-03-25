import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./CreatAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Form Submitted:", formData);

    // ✅ Navigate to AccountSetting after successful submission
    navigate("/account-setting");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Your Account</h2>

      <form onSubmit={handleSubmit} className="full-form">
        {/* Full Name Input */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <div className="input-box">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <div className="input-box">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <div className="input-box">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Company Name Input */}
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <div className="input-box">
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Agency Radio Buttons */}
        <div className="form-group">
          <label className="form-label">Are you an agency?</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-primary">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
