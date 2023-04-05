import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";



import images from "../../../constants";
import { Button, CartIcon, ToggledSourceController, ProfilePic, AccountModal } from "../";

import { useToggleComponent, useCurrentUser } from '../../../common/customHooks';
import { setDisplayedComponent } from '../../../features'

import {
    selectUser
} from "../../../features/slices/users/userSlice";
import { logout } from "../../../features"

import './NavBar.scss';
const NavBar = () => {
    const [toggleSourceAccountModal, setToggleSourceAccountModal, toggleValAccountModal, setToggleAccountValModal, checker] 
    = useToggleComponent('accountModal', true);
    const [toggleSourceCart, setToggleSourceCart, toggleValCart, setToggleValCart] = useToggleComponent('cart', true);

    const { currentUser } = useCurrentUser()
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const routeToAuth = (btnType) => {
        if (btnType === 'signin') {
            dispatch(setDisplayedComponent("signin"))
            navigate('/auth')
        }
        else if (btnType === 'signup') {
            dispatch(setDisplayedComponent("signup"))
            navigate('/auth')
        }

    }


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
                <li>
                        <Link to="/">
                            <div className="navbar__link">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <div className="navbar__link">About</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <div className="navbar__link">Services</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            <div className="navbar__link">Contact</div>
                        </Link>
                    </li>
                </ul>
                {currentUser !== null ? <div className="cart__container-wrapper">
                    <div className="cart__container">
                        <ToggledSourceController
                            toggleVal={toggleValCart}
                            toggleSource={toggleSourceCart}
                            setToggleVal={setToggleValCart}
                            setToggleSource={setToggleSourceCart}
                        >
                            <CartIcon onClick={() => handleSourceChange()} />
                        </ToggledSourceController> <p>View Cart</p>
                    </div>

                    <div className="cart__container">
                        <ToggledSourceController
                            toggleVal={toggleValAccountModal}
                            toggleSource={toggleSourceAccountModal}
                            setToggleVal={setToggleAccountValModal}
                            setToggleSource={setToggleSourceAccountModal}
                        >
                            <ProfilePic onClick={() => handleSourceChange()}
                            />
                        </ToggledSourceController><p>Account</p>

                    </div>
                </div> : <div className="navbar__cta">
                    <button onClick={() =>routeToAuth('signin')} className="navbar__signin">Sign in</button>
                    <button onClick={() => routeToAuth('signup')} className="navbar__register">Register</button>
                </div>}



            </div>
            {/* {checker === true ? <AccountModal /> : " "} */}

        </div>

    )
}

export default NavBar