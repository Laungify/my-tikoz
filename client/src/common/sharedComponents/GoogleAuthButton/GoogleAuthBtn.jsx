import React from "react";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";

import "./GoogleAuthBtn.scss";

const GoogleAuthBtn = () => {
  const customStyles = {
    display: "flex",
    justifyContent: "space-between",
    border: "5px solid white",
    alignItems: "center",
    height: "50px",
    width:"500px",
    background: "white",
    color: "white",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "600",
    padding: "20px",
    marginBottom: "20px",
  };

  return (
    <GoogleButton
      style={customStyles}
    />
  );
};

export default GoogleAuthBtn;
