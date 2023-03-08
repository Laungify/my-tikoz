import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"


import { useDispatch, useSelector } from "react-redux";
import { setEventsData, setToggleComponentTruthy } from "./features";

import eventsData from "./common/data";

import {
  toggleComponentBooleanValue,
  componentName,
  cartSelector,
} from "./features/selectors";

import AppRoutes from "./routes/routes";
import { Cart, Seats } from "./routes/pages";

import "./App.scss";
const App = () => {
  // make dispatched data global accross app 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEventsData(eventsData));
  }, [dispatch]); 
  // get the toggleComponentBooleanValueFromState
  const toggleComponentBooleanValueFromState = useSelector(
    toggleComponentBooleanValue
  );
  const toggleComponentNameFromState = useSelector(componentName);
  return (
    <>
      {toggleComponentBooleanValueFromState === true &&
      toggleComponentNameFromState === "cart" ? (
        <Cart />
      ) : (
        ""
      )}
      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
    </>
  );
};

export default App;
