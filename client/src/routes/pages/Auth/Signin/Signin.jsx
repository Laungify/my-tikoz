import React, { useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { useDispatch } from "react-redux";
import { setDisplayedComponent } from "../../../../features";

import {
  Logo,
  Button,
  GoogleAuthBtn,
} from "../../../../common/sharedComponents";

import { validateSignIn } from "../../../../common/validators";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../../../common/firebase/firebase";

import "./Signin.scss";
import { useEffect } from "react";

const Signin = () => {
  const success_notify = () => {
    setIsClicked(true); // set clicked to true on success
    toast.success('successfully logged in to site');
  };
  const error_notify = () => toast.error('failed to log');
  const { width, height } = useWindowSize();
  const [clicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const resetFormFields = () => {
    initialValues;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateSignIn,
    onSubmit: (values) => {
      signIn(values);
    },
  });

  const navigate = useNavigate();

  const routeToEvents = () => {
    navigate("/events");
  };

  const signIn = async (values) => {
    const { email, password } = values;

    await signInAuthUserWithEmailAndPassword(email, password)
      .then(success_notify)
      .then(() => setTimeout(() => routeToEvents(), 4000))
      .catch(error_notify);
  };




  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="signin__wrapper"
    >
      <Logo />
      <h1>WELCOME TO TIKO </h1>
      <h1>ZANGU</h1>
      <h3>CURATING YOUR BEST </h3>
      <h3>EXPERIENCES ALL UNDER ONE</h3>
      <h3> HUT</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="error_validators">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="error_validators">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <Button type="submit" classType="submit" onClick={() => formik.handleSubmit()}>
          Submit
        </Button>{" "}
        <div className="reset_or-register" variant="primary">
          <h2 className="reset">          Forgot Password? Reset
          </h2>
            <h2 className="register" onClick={() => dispatch(setDisplayedComponent("signup"))}>
              Not a user? Please Register
            </h2>
        </div>
        <Toaster position="center" reverseOrder={true} />
      </form>
      {/* <GoogleAuthBtn onClick= /> */}
      {clicked && <Confetti
        height={height}
        width={width}
      />}
    </motion.div>
  );
};

export default Signin;
