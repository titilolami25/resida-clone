import React from "react";
import "./footerStyle.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Resida</h3>
          <ul>
            <li>Serene Property at your finger tip</li>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Server status</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Payments & Pricing Policy</li>
            <li>Cookies & Data Privacy</li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <FaEnvelope className="icon" /> <p>Email: contact@company.com</p>
        <FaPhone className="icon" /> <p>Telephone: (414) 687-5892</p>
        <FaMapMarkerAlt className="icon" />{" "}
        <p>Address:794 Mcallister St, San Francisco, CA 94102</p>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p> Copyright &copy; 2022 BRIX Templates</p>
        <div className="footer-bottom2">
          <p>All rights reserved | Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
