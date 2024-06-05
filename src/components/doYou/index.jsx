import React from "react";
import "./doYouStyle.css";
import phoneimg from "assets/phoneimg.png";
import appleimg from "assets/appleimg.png";
import playsimg from "assets/playsimg.png";

const DoYou = () => {
  return (
    <section className="doyou_container flex">
      <section className="doyou_text_section">
        <div className="doyou_text_content">
          <p className="doyou_title">Download our App</p>
          <p className="doyou_description">
            With intuitive search features and a curated selection of properties
            tailored to your preferences, finding your dream home has never been
            easier. Join thousands of satisfied users who have unlocked the key
            to their ideal living space with just a tap.
          </p>
          <div className="download-buttons">
            <div className="button-item">
              <img src={appleimg} alt="Apple Store" className="store-logo" />
              <span className="button-text">
                <span className="first-line">Download on the</span>
                <br />
                <span className="second-line">Apple Store</span>
              </span>
            </div>

            <div className="button-item">
              <img
                src={playsimg}
                alt="Google Play Store"
                className="store-logo"
              />
              <span className="button-text">
                <span className="first-line">Get it on</span>
                <br />
                <span className="second-line">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="doyou_image_section">
        <img src={phoneimg} alt="info" className="main_image" />
      </section>
    </section>
  );
};

export default DoYou;
