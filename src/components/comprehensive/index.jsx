import React from "react";
import "./comprehensiveStyle.css";
import guidemap from "assets/guidemap.svg";
import Button from "shared/button";

const Comprehensive = () => {
  return (
    <section className="comprehensive_container flex">
      <section className="comprehensive_image_section">
        <img src={guidemap} alt="info" className="image" />
      </section>
      <section className="comprehensive_text_section">
        <div className="comprehensive_text_content">
          <p className="comprehensive_title">Comprehensive</p>
          <p className="comprehensive_subtitle">Neighborhood Guides</p>
        </div>
        <div className="comprehensive_description">
          <p>
            The 'Neighborhood Guides' in Resida are like your friendly local
            experts,
            <br />
            giving you the inside scoop on the vibe, hotspots,
            <br />
            and quirks of each area so you can find your perfect match
            <br />
            effortlessly! 🏡✨
          </p>
        </div>
        <div className="comprehensive_button">
          <Button
            style={{
              width: "256px",
              backgroundColor: "#DBA94D",
              color: "#1F4B43",
              padding: "7px 12px",
            }}
            btnName={"Download our app"}
            rightIcon={
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3607_57)">
                  <path
                    d="M0.961428 6.3975H12.9721L8.37301 2.01825C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.20353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32077 14.6831 7.62321 14.4453 7.86065L9.20323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.12255 12.5905 8.13189 12.2098 8.37271 11.9805L12.991 7.60125H0.961428C0.629095 7.60125 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z"
                    fill="#1F4B43"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3607_57">
                    <rect
                      width="15"
                      height="12.84"
                      fill="white"
                      transform="translate(0.0859375 0.578125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
      </section>
    </section>
  );
};

export default Comprehensive;
