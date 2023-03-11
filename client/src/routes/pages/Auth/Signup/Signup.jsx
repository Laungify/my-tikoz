import React,{useState} from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { setDisplayedComponent, login } from "../../../../features";

import {
  Logo,
  Button,
  GoogleAuthBtn,
} from "../../../../common/sharedComponents";

import { validateRegistatiion } from "../../../../common/validators";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../../../common/firebase/firebase";


import "./Signup.scss";
const Signup = () => {
const [loading, setisloading] = useState(false)


  const dispatch = useDispatch();
  const initialValues = {
    firstname: "",
    secondname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const resetFormFields = () => {
    initialValues;
  };
  const formik = useFormik({
    initialValues,
    validateRegistatiion,
    onSubmit: (values) => {
      register(values);
      resetFormFields();
    },
  });


  const register = async (values) => {
    const { email, password, firstname, secondname, phone } = values;
    const displayName = `${firstname} ${secondname}`;

    const userAuth = await createAuthUserWithEmailAndPassword(
      email,
      password
    )
    setisloading(true)

    const uid = userAuth.user.uid

    // Create a new document using the uid as the document id
    // or however else you want to use this
    await createUserDocumentFromAuth(uid, { displayName: displayName, email: email, phone: phone })
    .then(setisloading(false))
      .then(() => { dispatch(setDisplayedComponent("signin"))})
      .catch((error) => {
        // if (error.code === "auth/email-already-in-use") {
        //   alert("Cannot create user, email already in use");
        // } else {
        //   console.log("user creation encountered an error", error);
        // }
      })
  }

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
      { loading ? <h3>Loading...</h3> : 
      <form onSubmit={formik.handleSubmit}>
        <div className="name__wrapper">
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="enter your firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />

          <input
            id="secondname"
            name="secondname"
            type="text"
            placeholder="enter your secondname"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.secondname}
          />
        </div>
        <div className="error_validators">
          {formik.touched.firstname && formik.errors.firstname ? (
            <div>{formik.errors.firstname}</div>
          ) : null}
          {formik.touched.secondname && formik.errors.secondname ? (
            <div>{formik.errors.secondname}</div>
          ) : null}
        </div>

        <div className="name__wrapper">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <input
            id="phone"
            name="phone"
            type="phone"
            placeholder="enter your phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="error_validators">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </div>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <div className="error_validators">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="confirm your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        <div className="terms_conditions">
          <input
            className="checkbox"
            type="checkbox"
            name="terms"
            value="checked"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="p_text-terms">I agree to the Terms and Service</p>
        </div>
        <div className="error_validators">
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <Button type="submit" toggle={() => formik.handleSubmit()}>
          Submit
        </Button>
        <div className="reset_or-register" variant="primary">
          <h2 className="reset" onClick={() => dispatch(setDisplayedComponent("signin"))}>          Already Registered?   Login
          </h2>
        </div>
        <Toaster position="top-center" reverseOrder={true} />
      </form>
}
      {/* <GoogleAuthBtn onClick="" /> */}
    </motion.div>
  );
};

export default Signup;
