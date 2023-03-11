import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';


import images from "../../../constants";
import { Button, CartIcon, ToggledSourceController, ProfilePic, AccountModal } from "../";

import { useToggleComponent } from '../../../common/customHooks';

import {
    selectUser
} from "../../../features/slices/users/userSlice";
import { logout } from "../../../features"

import './NavBar.scss';
const NavBar = () => {
    const [toggleSourceAccountModal, setToggleSourceAccountModal, toggleValAccountModal, setToggleAccountValModal, checker] = useToggleComponent('accountModal', true);
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
                {/* <div className="navbar__cta">
                    <button className="navbar__signin">Sign in</button>
                    <button className="navbar__register">Register</button>
                </div> */}
                <div className="cart__container-wrapper">
                    <div className="cart__container">
                        <ToggledSourceController
                            toggleVal={toggleValCart}
                            toggleSource={toggleSourceCart}
                            setToggleVal={setToggleValCart}
                            setToggleSource={setToggleSourceCart}
                        >
                            <CartIcon toggle={() => handleSourceChange(toggleSourceCart)} />
                        </ToggledSourceController> <p>View Cart</p>
                    </div>

                    <div className="cart__container">
                        <ToggledSourceController
                            toggleVal={toggleValAccountModal}
                            toggleSource={toggleSourceAccountModal}
                            setToggleVal={setToggleAccountValModal}
                            setToggleSource={setToggleSourceAccountModal}
                        >
                            <ProfilePic toggle={() => handleSourceChange('accountModal')}
                            />
                        </ToggledSourceController><p>Account</p>

                    </div>
                </div>

            </div>
            {/* {checker === true ? <AccountModal /> : " "} */}

        </div>

    )
}

export default NavBar