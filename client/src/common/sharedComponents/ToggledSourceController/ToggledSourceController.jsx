import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { handleToggledComponent } from "../../customHooks";

// in case oof a component  having different state on same page like cartIco, seatButtons, use the HOC ToggleSourceController

const ToggledSourceController = ({
  toggleVal,
  toggleSource,
  children,
  setToggleVal,
  setToggleSource,
}) => {
  const dispatch = useDispatch();
  // avoid     setToggleVal(!toggleVal); since the state will misbehave and set the toggleVal to different value, which
  // hence forcing you to double click twice to dispacth correct value


  const handleSourceChange = () => {
    handleToggledComponent(toggleVal, toggleSource, dispatch);
    setToggleVal(toggleVal);
    setToggleSource(toggleSource);
  };

  return (
    <>
      {React.cloneElement(children, {
        onClick: handleSourceChange,
      })}
    </>
  );
};

export default ToggledSourceController;
