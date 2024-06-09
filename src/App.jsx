import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/landingPage';
import ContactUsPage from './views/contactUsPage/contactUs';

const App = () => {
  return (
    <Routes>
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from './views/landingPage';
// import ContactUsPage from './views/contactUsPage';  // Ensure the path is correct for your project structure

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/contact" component={ContactUsPage} />
//                 <Route path="/" component={LandingPage} />
//             </Switch>
//         </Router>
//     );
// };

// export default App;










// // import React from 'react';
// // import Comprehensive from 'components/comprehensive';
// // import LandingPage from './views/landingPage';
// // import FeaturedCard from 'shared/featuredCard';
// // import DyProperty from 'components/dyProperty';
// // import DiscoverPlace from 'components/discoverPlace';
// // import FeaturedProperties from 'components/featuredProperties';


// // function  App  () {
// //     return (
// //     <div className="App">
// //         <LandingPage/>
    
// //     </div>
// //     );
// // }

// // export default App;
