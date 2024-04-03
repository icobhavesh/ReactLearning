import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SecondRendering from './Expend item/propsDrilling/Context';
// import SndData from './SndData';
// import reportWebVitals from './reportWebVitals';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondRendering/>
  
    <App />
    {/* <SndData/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

