import React from "react";

import images from "../../../constants";
import "./CartIcon.scss";
const CartIcon = ({onClick}) => {

  return (
    <img
      className="cart__icon"
      src={images.trolley}
      alt="trolley"
      onClick={onClick}
    />
  );
};

export default CartIcon;
