import React from 'react'
import { Outlet, Link } from "react-router-dom";


import images from "../../../constants";
import { Button, CartIcon, ToggledSourceController, ProfilePic } from "../";

import { useToggleComponent } from '../../../common/customHooks';

import './NavBar.scss';
const NavBar = () => {
    const [toggleSourceModal, setToggleSourceModal, toggleValModal, setToggleValModal, checker] = useToggleComponent('accountModal', true);
    const [toggleSourceCart, setToggleSourceCart, toggleValCart, setToggleValCart] = useToggleComponent('cart', true);
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img className="app__navbar-logo" src={images.logo} alt="logo" />
            </div>
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

            <div className="navbar__menu">
                <ul className="navbar__list">
                    <li className="navbar__item"><a href="#" className="navbar__link">Home</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link">About</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link">Services</a></li>
                    <li className="navbar__item"><a href="#" className="navbar__link">Contact</a></li>
                </ul>
                <div className="navbar__cta">
                    <button className="navbar__signin">Sign in</button>
                    <button className="navbar__register">Register</button>
                </div>
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
                        <ProfilePic toggle={() => handleSourceChange(toggleSourceCart)} />
                    </ToggledSourceController><p>Account</p>

                </div>
            </div>
        </div>

    )
}

export default NavBar