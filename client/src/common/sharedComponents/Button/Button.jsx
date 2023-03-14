import React from "react";

import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  auth: "auth",
  activity: "activity",
};
const Button = ({ children, classType, color, type,buttonType, onClick,  ...otherProps }) => {
  // ...otherprops inside button like onClick, onHover, colors,  styling style={} etc
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button__wrapper button__wrapper-${classType} ${color} ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
