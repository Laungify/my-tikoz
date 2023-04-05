import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import {
  ToggledSourceController,
  Button,
  Footer,
} from "../../../common/sharedComponents";
import { ModalOverlay } from "../";


import {useToggleComponent} from '../../../common/customHooks';


import images from "../../../constants";

import "./DisplayActivities.scss";
const DisplayActivities = () => {
  // moved the toggle implentation to a reusble service for future modals
  const [toggleSourceModal,setToggleSourceModal,toggleValModal, setToggleValModal, checker] = useToggleComponent('activityModal', true);

  return (
    <>
      <div className="dispaly__activities-wrapper">
        <div className="dispaly__activities-title">
          <m.h1
            initial={{ opacity: 1, color: "#000" }}
            animate={{
              opacity: 1,
              color: "#6ce08f",
              transition: { duration: 1 },
            }}
            exit={{ opacity: 0, color: "#000", transition: { duration: 1 } }}
            style={{ transitionProperty: "color" }}
          >
            WELCOME TO TIKO ZANGU
          </m.h1>
          <m.h1
            initial={{ opacity: 0, color: "#000" }}
            animate={{
              opacity: 1,
              color: "#0a0101",
              transition: { duration: 2 },
            }}
            exit={{ opacity: 0, color: "#c41515", transition: { duration: 1 } }}
            style={{ transitionProperty: "color" }}
            className="experience"
          >
            SELECT YOUR EXPERIENCE
          </m.h1>
        </div>
        <div className="activity__wrapper">
          <div className="col__one">
            <div className="col__item">
              <img src={images.food} alt="food" />
              <div className="col__item-right app__flex">
                <Button classType="activity" color="red">
                  EAT
                </Button>
                <h4 className="text__centered">
                  Reserve tables at your favorite restaurants for brunch,
                  dinner, breakfast etc{" "}
                </h4>
                <ToggledSourceController
                  toggleVal={toggleValModal}
                  toggleSource={toggleSourceModal}
                  setToggleVal={setToggleValModal}
                  setToggleSource={setToggleSourceModal}
                >
                  <Button
                    onClick={() => handleSourceChange("activityModal")}
                    classType="create"
                  >
                    CREATE
                  </Button>
                </ToggledSourceController>
              </div>
            </div>
            <div className="col__item">
              <img src={images.musicEvent} alt="food" />
              <div className="col__item-right app__flex">
                <Button classType="activity" color="yellow">
                  PARTY
                </Button>
                <h4 className="text__centered">
                  Enjoy Kenya's party and events scene with concerts, plays,
                  conferences, and book club meet-ups
                </h4>

                <ToggledSourceController
                  toggleVal={toggleValModal}
                  toggleSource={toggleSourceModal}
                  setToggleVal={setToggleValModal}
                  setToggleSource={setToggleSourceModal}
                >
                  <Button
                    onClick={() => handleSourceChange("activityModal")}
                    classType="create"
                  >
                    CREATE
                  </Button>
                </ToggledSourceController>
              </div>
            </div>
          </div>
          <div className="col__two"></div>
          <div className="col__one">
            <div className="col__item">
              <img src={images.bed} alt="food" />
              <div className="col__item-right app__flex">
                <Button classType="activity" color="blue">
                  SLEEP
                </Button>
                <h4 className="text__centered">
                  Relax at some of Kenya's luxurious, home-away-from-home
                  accommodations.
                </h4>
                <ToggledSourceController
                  toggleVal={toggleValModal}
                  toggleSource={toggleSourceModal}
                  setToggleVal={setToggleValModal}
                  setToggleSource={setToggleSourceModal}
                >
                  <Button
                    onClick={() => handleSourceChange("activityModal")}
                    classType="create"
                  >
                    CREATE
                  </Button>
                </ToggledSourceController>
              </div>
            </div>
            <div className="col__item">
              <img src={images.hiking} alt="food" />
              <div className="col__item-right app__flex">
                <Button classType="activity" color="green">
                  PLAY
                </Button>
                <h4 className="text__centered">
                  Have an adventure with skydiving, paragliding, park walks, and
                  more outdoor recreations
                </h4>
                <ToggledSourceController
                 toggleVal={toggleValModal}
                 toggleSource={toggleSourceModal}
                 setToggleVal={setToggleValModal}
                 setToggleSource={setToggleSourceModal}
                >
                  <Button
                    onClick={() => handleSourceChange("activityModal")}
                    classType="create"
                  >
                    CREATE
                  </Button>
                </ToggledSourceController>
              </div>
            </div>
          </div>
          {checker === true ? <ModalOverlay /> : " "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayActivities;