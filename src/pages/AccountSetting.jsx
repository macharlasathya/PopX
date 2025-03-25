import React from "react";
import "./AccountSetting.css"; // Ensure correct path

import pic from "../assets/pic.jpg"; // Check if image exists

const AccountSetting = () => {
  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>
      <div className="account-info">
        <img src={pic} alt="Profile" className="profile-pic" />
        <div className="user-details">
          <h5>John Doe</h5>
          <p className="text-muted">johndoe@example.com</p>
        </div>
      </div>
      <p className="account-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis vitae nulla suscipit vehicula. Nulla facilisi. Nam suscipit, nisi a fermentum tincidunt.
      </p>
    </div>
  );
};

export default AccountSetting;
