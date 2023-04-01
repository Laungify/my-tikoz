import React, { useState, useRef, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { handleToggledComponent } from "../../../common/customHooks";

import "./ModalOverlay.scss";
const ModalOverlay = () => {
  // move this to a reusablecomponent 
  const [toggleValue, setToggleValue] = useState(false);
  const [toggleSourceModal, setToggleSourceModal] = useState("activityModal");
  const dispatch = useDispatch();

  const handleSourceChange = (e) => {
    // stop the propagation of the click event when the user clicks inside the modal.
    e.stopPropagation();
        // This prevents the overlay from triggering the handleOverlayClick function when the user clicks inside the modal.

    setToggleValue(!toggleValue);
    setToggleSourceModal(toggleSourceModal);
    handleToggledComponent(toggleSourceModal, toggleValue, dispatch);
  };
    // move this to a reusablecomponent 


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

  const modalOverlayRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalOverlayRef.current && !modalOverlayRef.current.contains(event.target)) {
        handleSourceChange(toggleSourceModal);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOverlayRef, toggleSourceModal]);


  return (
    <div className="modal-overlay__false" ref={modalOverlayRef}> 
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
         </div> 

          {/* <button
          onClick={() => handleSourceChange(toggleSourceModal)}
          style={{ backgroundColor: "green" }}
        >
          Go Back
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
