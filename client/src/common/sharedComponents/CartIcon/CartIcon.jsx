import React from "react";

import images from "../../../constants";
import "./CartIcon.scss";
const CartIcon = ({toggle}) => {

  return (
    <img
      className="cart__icon"
      src={images.trolley}
      alt="trolley"
      onClick={toggle}
    />
  );
};

export default React.memo(CartIcon);
