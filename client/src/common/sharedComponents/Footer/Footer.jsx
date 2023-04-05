import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import images from "../../../constants";


import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__social">
          <a href="#" className="footer__social-icon"><img src={images.twitter} /></a>
          <a href="#" className="footer__social-icon"><img src={images.facebook} /></a>
          <a href="#" className="footer__social-icon"><img src={images.instagram} /></a>

          
        </div>
        <div className="footer__links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Complaints</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

