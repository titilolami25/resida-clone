import React from 'react';
import './needOfficeStyle.css';
import  officeimg1 from 'assets/officeimg1.png';
import officeimg2 from 'assets/officeimg2.png';
import backg from 'assets/blurimg.png'

 const NeedOffice = () => {
  return (
 
<section className = "needOffice_container flex">
      <section className='needOffice_image_section'>
        <img src={officeimg1} alt='info' className='image' />
      <section className='mini_image_section'>
      </section>
        <img src= {officeimg2} alt='mini'className='pic'/> 
      </section>
      <section className='needOffice_text_section'>
        <div className='needOffice_text_content'>
          <p className='needOffice_title'>Need an office space?</p>
        </div>
        <div className='needOffice_description'>
          <p>
          Seeking office space in Lagos? Look no further! Our accommodations
          <br/> offer tailored solutions to meet your workspace needs, ensuring 
          <br/>productivity and comfort in the heart of Lagos
          </p>
        </div>
</section>
   </section>
    
);
};
export default NeedOffice;