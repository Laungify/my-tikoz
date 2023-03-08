import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import { IoPersonCircleOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

import { Button, CartIcon, ToggledSourceController, AccountModal } from "../";

import images from "../../../constants";

import { useToggleComponent } from '../../../common/customHooks';


import "./AfterAuthNav.scss";
const AfterAuthNav = () => {
  // const [toggleSourceCart, setToggleSourceCart] = useState("cart");
  // const [toggleVal, setToggleVal] = useState(true);

  const [toggleSourceModal, setToggleSourceModal, toggleValModal, setToggleValModal, checker] = useToggleComponent('accountModal', true);
  const [toggleSourceCart, setToggleSourceCart, toggleValCart, setToggleValCart] = useToggleComponent('cart', true);

  return (
    <nav className="app__navbar">
      <img className="app__navbar-logo" src={images.logo} alt="logo" />

      {/* <ul className="nav__list">
        {[
          { name: "PARTY", color: "yellow", link: "/party" },
          { name: "EAT", color: "red", link: "/eat" },
          { name: "SLEEP", color: "blue", link: "/sleep" },
          { name: "PLAY", color: "green", link: "/play" },
        ].map((item, index) => (
          <li key={`btn_link-${index}`}>
            <Link to={item.link}>
              <Button classType="activity" color={item.color}>
                {item.name}
              </Button>{" "}
            </Link>
          </li>
        ))}
      </ul> */}
      <ul className="nav__list">
        <div className="nav__list-items">
          <li>
            <Link to="/party">
              <Button classType="activity" color="yellow">
                PARTY
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/eat">
              <Button classType="activity" color="red">
                EAT
              </Button>
            </Link>
          </li>
        </div>
        <div className="nav__list-items">
          <li>
            <Link to="/sleep">
              <Button classType="activity" color="blue">
                SLEEP
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/play">
              <Button classType="activity" color="green">
                PLAY
              </Button>
            </Link>
          </li>
        </div>
      </ul>


      <div className="cart__container">
        <ToggledSourceController
          toggleVal={toggleValCart}
          toggleSource={toggleSourceCart}
          setToggleVal={setToggleValCart}
          setToggleSource={setToggleSourceModal}
        >
          <CartIcon toggle={() => handleSourceChange(toggleSourceCart)} />
        </ToggledSourceController> <p>View Cart</p>
      </div>

      <div className="cart__container">
        <ToggledSourceController
          toggleVal={toggleValModal}
          toggleSource={toggleSourceModal}
          setToggleVal={setToggleValModal}
          setToggleSource={setToggleSourceCart}
        >
          <IoPersonCircleOutline className="profile__pic" onClick={() => handleSourceChange(toggleSourceModal)} />
        </ToggledSourceController><p>Account</p>

      </div>

      {checker === true ? <AccountModal /> : " "}

    </nav>
  );
};

export default AfterAuthNav;
