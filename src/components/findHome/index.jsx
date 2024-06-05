import React from 'react';
import './findHomeStyle.css';
import fhimg1 from 'assets/fhimg1.svg';
import fhimg2 from 'assets/fhimg2.svg';
import fhimg3 from 'assets/fhimg3.svg';
import fhimg4 from 'assets/fhimg4.svg';
import fhimg5 from 'assets/fhimg5.svg';
const FindHome = () => {
  return (
    <div className="findHome">
      <header>
        <h1 className="title">Find homes in popular neighbourhoods</h1>
        <h2 className="subtitle">Apartments in Lekki, Obalende, Agege & Yaba</h2>
      </header>
      <div className="findHome_container">
        <div className="portrait">
          <img src={fhimg1} alt="Portrait" />
          <div className="image-text">8 Properties Lekki</div>
        </div>
        <div className="image-grid">
          <div className="image-item">
            <img src={fhimg2} alt="Image 1" />
            <div className="image-text">2 Properties Agege</div>
          </div>
          <div className="image-item">
            <img src={fhimg3} alt="Image 2" />
            <div className="image-text">8 Properties Gbagada</div>
          </div>
          <div className="image-item">
            <img src={fhimg4} alt="Image 3" />
            <div className="image-text">45 Properties Obalende</div>
          </div>
          <div className="image-item">
            <img src={fhimg5} alt="Image 4" />
            <div className="image-text">12 Properties Yaba</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindHome;






// import React from 'react';
// import './findHomeStyle.css';
// import fhimg1 from 'assets/fhimg1.svg';
// import fhimg2 from 'assets/fhimg2.svg';
// import fhimg3 from 'assets/fhimg3.svg';
// import fhimg4 from 'assets/fhimg4.svg';
// import fhimg5 from 'assets/fhimg5.svg';

// const FindHome = () => {
//   return (
//     <div className="findHome">
//       <header>
//         <h1 className="title">Find homes in popular neighbourhoods</h1>
//         <h2 className="subtitle">Apartments in Lekki, Obalende, Agege & Yaba</h2>
//       </header>
//       <div className="findHome_container">
//       <div className="portrait">
//           <img src={fhimg1} alt="Portrait" />
//           <div className="image-text">8 Properties Lekki
//           </div>
//         <div className="image-grid">
//           <div className="image-item">
//             <img src={fhimg2} alt="Image 1" />
//             <div className="image-text">2 Properties Agege</div>
//           </div>
//           <div className="image-item">
//             <img src={fhimg3} alt="Image 2" />
//             <div className="image-text">8 Properties Gbagada</div>
//           </div>
//           <div className="image-item">
//             <img src={fhimg4} alt="Image 3" />
//             <div className="image-text">45 Properties Obalende</div>
//           </div>
//           <div className="image-item">
//             <img src={fhimg5} alt="Image 4" />
//             <div className="image-text">12 Properties Yaba</div>
//           </div>
//         </div>
        
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FindHome;
