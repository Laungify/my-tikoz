import { setToggleComponentTruthy } from "../../../features";

// use this handler to dispatch directly to a component if it needs tomanage state
// in case oof a Coponent having different state on same page like cartIco, seatButtons, use the HOC ToggleSourceController
const handleToggledComponent = (toggleVal, source, dispatchFunction) => {
  dispatchFunction(
    setToggleComponentTruthy({
      componentIsOpen: toggleVal,
      componentName: source
    })
  );
};

export default handleToggledComponent;
