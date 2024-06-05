
import React from "react";
import "./heroSectionStyle.css";
import bgImage from "assets/image.jpg";
import Button from "shared/button";

const HeroSection = () => {
  return (
    <div
      className="hero_section_container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero_section_content">
        <p>Finding the perfect home has never been this easy!</p>
        <span>
          Eliminate stressful house searches. We link you with Lagos’s finest
          and most affordable residences - <strong>Zero agent fees, middle men payments & hassles.</strong>
        </span>
        <div className="btn_container">
          <Button
            style={{
              width: '32%',
            }}
            btnName={"Download our app"}
          />
          <Button
            style={{
              width: "32%",
            }}
            outline
            btnName={"Learn more"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




