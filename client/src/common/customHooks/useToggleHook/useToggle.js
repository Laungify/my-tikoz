import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import {
    toggleComponentBooleanValue,
    componentName,
    cartSelector,
  } from "../../../features/selectors";
const useToggleComponent = (initialComponentName, initialToggleVal) => {
    const [toggleSource, setToggleSource] = useState(initialComponentName);
    const [toggleVal, setToggleVal] = useState(initialToggleVal);
  
    const toggleComponentBooleanValueFromState = useSelector(
      toggleComponentBooleanValue
    );
    const toggleComponentNameFromState = useSelector(componentName);
  
    const [checker, setChecker] = useState(false);
    useEffect(() => {
      if (
        toggleComponentBooleanValueFromState === true &&
        toggleComponentNameFromState === toggleSource
      ) {
        setChecker(true);
      } else {
        setChecker(false);
      }
    }, [toggleComponentBooleanValueFromState, toggleComponentNameFromState, toggleSource]);
  
    const toggle = () => {
      setToggleVal(!toggleVal);
    };
  
    return [toggleSource,setToggleSource,toggleVal, setToggleVal, checker, toggle];
  };
export default   useToggleComponent