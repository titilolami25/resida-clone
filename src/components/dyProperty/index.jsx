import React from "react";
import "./dyPropertyStyle.css";
import Button from 'shared/button';
import dypimage from "assets/dypimage.png";
import miniImage1 from "assets/miniImage1.svg"; 
import miniImage2 from "assets/miniImage2.svg"; 
import miniImage3 from "assets/miniImage3.svg"; 
import miniImage4 from "assets/miniImage4.svg"; 

const DyProperty = () => {
  return (
    <section className='dyproperty_container flex'>
      <section className='mini_images_container'>
        <img src={miniImage1} alt='mini1' className='mini_image' />
        <img src={miniImage2} alt='mini2' className='mini_image' />
        <img src={miniImage3} alt='mini3' className='mini_image' />
        <img src={miniImage4} alt='mini4' className='mini_image' />
      </section>

      <section className='dyproperty_text_section'>
        <div className='dyproperty_text_content'>
          <p className='dyproperty_title'>Do you have a property?</p>
          <p className='dyproperty_sub_title'>Provide accommodation here in Lagos</p>
          <p className='dyproperty_description'>
            Own a property in Lagos? Join our platform to effortlessly list your 
            accommodations and connect with eager tenants seeking their 
            perfect home in the vibrant city of Lagos.
          </p>
        </div>
        
        <div className='dyproperty_button'>
          <Button
            style={{
              width: "256px",
              backgroundColor: '#DBA94D',
              color: '#1F4B43',
              padding: "7px 12px",
            }}
            btnName={"Download our app"} 
            rightIcon={
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3607_57)">
                  <path d="M0.961428 6.3975H12.9721L8.37301 2.01825C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.20353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32077 14.6831 7.62321 14.4453 7.86065L9.20323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.12255 12.5905 8.13189 12.2098 8.37271 11.9805L12.991 7.60125H0.961428C0.629095 7.60125 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z" fill="#1F4B43"/>
                </g>
                <defs>
                  <clipPath id="clip0_3607_57">
                    <rect width="15" height="12.84" fill="white" transform="translate(0.0859375 0.578125)"/>
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
      </section>

      <section className='dyproperty_image_section'>
        <img src={dypimage} alt='info' className='main_image' />
      </section>
    </section>
  );
};

export default DyProperty;
