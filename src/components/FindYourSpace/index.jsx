import React from 'react';
import './fypStyles.css';
import space from 'assets/houseimage.svg'
import Button from 'shared/button';

const FindYourSpace = () => {
    return (
        <section className='fyp_container flex'>
            <section className='fyp_image_section'>
                <img src={space} alt='info' className='image' />
            </section>
            <section className='fyp_text_section'>
                <div>
                    <p>{'Your dream home is only a few clicks away'}
                    </p>
                </div>
                <div>
                    <span>{'-Find your space now!'}</span>
                </div>
            <div className='fyp_button'> 
               <Button
                Style={{
                  width:'33%',
                  fontSize:'16px',
                  borderRadius:"10px",
                  backgroundColor: "white",
                  color:"#1B2056", 
                  fontweigth:'bold',
                  padding:"12px 34px",
           }}
         btnName={'Download app'} 
            />
           </div>
             </section>
              </section>
            );
            };
           export default FindYourSpace;
           


 





// import React from 'react';
// import './fypStyles.css';
// import space from 'assets/background.png';
// import Button from 'shared/button';

// const FindYourSpace= () => {
//     return(
//   <section className='fyp_container flex'>
//     <section className='fyp_image_section'>
//     <img src='background'alt='info' className='image'/>
//     </section>
// <section className='fyp_text_section '>
//     <div>
// <p>{"Your dream home is only a few clicks away"}</p> 
//     </div>
//     <div>
//         <span>{"-Find your space now!"}</span>
// </div>
// <div className='fyp_button'>
//     <Button
//     Style={{
//     borderRadius:"10px",
//     backGroundColor: "white",
//     color:"#1B2056", 
//     padding:"12px 34px",
// }}
// btnName={'Download app'} 
// />
// </div>

// </section>
// </div>
// );
// };
// export default FindYourSpace;




    