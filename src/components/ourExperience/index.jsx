import React from 'react';
import "./ourExperienceStyle.css";
import image1 from '../../assets/image 1.jpg'
import image2 from '../../assets/image 2.svg'
import image3 from '../../assets/image 3.svg'
const OurExperience = () => {
    return (
        <div className="our_exp_container">
            <div className="boxes_container flex">
                <div className="box1">
                    <img src={image1} alt = "descrption 1" className="box_image" />
                </div>
                <div className="box2">
                    <img src={image2} alt="description 2" className="box_image" />
                </div>
                <div className="box3">
                    <img src={image3} alt="description 3" className="box_image" />
                </div>
            </div>
            <div className="text flex">
                {'Our Experience guarantee unmatched proficiency and excellence.'}
            </div>
        </div>
    );
};

export default OurExperience;












// import React from 'react';
// import "./ourExperienceStyle.css";

// const OurExperience = () => {
//     return (
//         <div className="our_exp_container">
//             <div className="boxes_container flex">
//                 <div className="box1">1</div>
//                 <div className="box2">2</div>
//                 <div className="box3">3</div>
//             </div>
//             <div className="text flex">
//                 {'Our Experience guarantee unmatched proficiency and excellence'}
//             </div>
//         </div>
//     );
// };

// export default OurExperience;





// import React from 'react';
// import "./ourExperienceStyle.css";

// const OurExperience = () => {
//   return (
//     <div className="our_exp_container">
//       <div className="boxes_container flex">
//         <div className="box1">1</div>
        
//         <div className="box2">2</div>
       
//         <div className="box3">3</div>
//       </div>
//       <div className="text flex">
//         {'Our Experience guarantee unmatched profiiencey and excellence'}
//       </div>
//     </div>
//   );
// };

// export default OurExperience;






