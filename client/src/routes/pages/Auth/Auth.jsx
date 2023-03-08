import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { NavBar, Footer } from "../../../common/sharedComponents";
import { Signin, Signup } from "../index";

import { scrollabeleHook, useHrOnSmallScreens } from "../../../common/customHooks";
import { displayedComponent } from "../../../features/selectors";

import images from "../../../constants";

import "./Auth.scss";

const Auth = () => {
  const { isScrolled } = scrollabeleHook();
  const [dividerHeight, setDividerHeight] = useState(560);
  const [dividerTop, setDividerTop] = useState(150);

  // we need the value of displayedComponent, thats itseither set to signin/signup
  const displayedComponentFromState = useSelector(displayedComponent);

  useEffect(() => {
    if (isScrolled) {
      setDividerHeight(450);
      setDividerTop(270);
    } else {
      setDividerHeight(560);
      setDividerTop(150);
    }
  }, [isScrolled]);

  // change the ddivider to horizontal when screen resized to less than 767
 const isHr = useHrOnSmallScreens();

  return (
    <>
      <NavBar />
      <div className="home__container">
        <div className="home__images-wrapper">
          <div className="home__images">
            <img src={images.bed} alt="bed" />
            <img src={images.food} alt="food" />
          </div>
          <div className="home__images">
            <img src={images.musicEvent} alt="music" />
            <img src={images.hiking} alt="hiking" />
          </div>
        </div>
        <div className="divider">
          {isHr === true ? (
            <hr className="horizontal_divider" />
          ) : (
            <div className="verticaal__divider"></div>
          )}
        </div>
          {displayedComponentFromState === "signin" ? <Signin /> : <Signup />}
      </div>
      <Footer />
    </>
  );
};

export default Auth;
