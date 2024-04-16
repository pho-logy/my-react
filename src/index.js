import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './Demo';
// import MyRedux from './app/components/MyRedux';
import Axios1 from './app/components/Axios01';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





const demo = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>
);
// //
// const redux1 = ReactDOM.createRoot(document.getElementById('redux1'));
// redux1.render(
//     <React.StrictMode>
//         <MyRedux />
//     </React.StrictMode>
// );
const axios1 = ReactDOM.createRoot(document.getElementById('axios1'));
axios1.render(
    <React.StrictMode>
        <Axios1 />
    </React.StrictMode>
);
reportWebVitals();

console.log('log--')