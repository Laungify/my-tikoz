import React, { useRef, useEffect } from "react";

import './InputFocus.scss';
const InputFocus = ({ classType, ...otherProps }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const handleFocus = () => {
      input.style.cursor = "blinking-cursor";
    };
    const handleBlur = () => {
      input.style.cursor = "default";
    };
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder={otherProps.placeholder}
      className={`${classType} `}
    />
  );
};

export default InputFocus;
