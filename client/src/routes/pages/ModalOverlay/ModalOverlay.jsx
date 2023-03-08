import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { handleToggledComponent } from "../../../common/customHooks";

import "./ModalOverlay.scss";
const ModalOverlay = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [toggleSourceModal, setToggleSourceModal] = useState("activityModal");
  const dispatch = useDispatch();

  const handleSourceChange = () => {
    setToggleValue(!toggleValue);
    setToggleSourceModal(toggleSourceModal);
    handleToggledComponent(toggleSourceModal, toggleValue, dispatch);
  };

  const navigate = useNavigate();
  const routeToAuth_or_shop = (buttonType) => {
    switch (buttonType) {
      case "auth":
        navigate("/auth");
        break;
      case "events":
        navigate("/events");
        break;
      default:
        break;
    }
    handleSourceChange(toggleSourceModal);
  };

  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Login/Register or Continue Shopping</h2>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => routeToAuth_or_shop("auth")}
            style={{ backgroundColor: "blue" }}
          >
            Login/Register to earn points 🎆✨🎉
          </button>
          <button
            onClick={() => routeToAuth_or_shop("events")}
            style={{ backgroundColor: "red" }}
          >
            Continue Shopping without registering
          </button>
          <button
          onClick={() => handleSourceChange(toggleSourceModal)}
          style={{ backgroundColor: "green" }}
        >
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
