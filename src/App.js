
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route';

const App = (props) => {
  return (

    <BrowserRouter>
    <div className="App">
      <Routes />
    </div>
    </BrowserRouter>
  )
}
export default App



// export default App;
// import React,{useState, useEffect} from 'react';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './route';
// const App = (props) => {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div className="wrapper">
//           <Routes />
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }
// export default App