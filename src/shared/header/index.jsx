import React from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import logo from "../../assets/Resida Logo.svg";
import { MdMenuOpen } from "react-icons/md";
import Button from "shared/button";
const nav = [
  {
    name: "Contact",
    to: "/contact",
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-and-company">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-cta-section">
        {/* CTA*/}

        <ul className="header-nav-list">
          {nav.map(({ to, name }, idx) => (
            <li key={idx} className="header-nav-item">
              <Link to={to} className="header-nav-link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-button-container">
          <Button
            style={{
              width: "90%",
            }}
            btnName={"Download our app"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
