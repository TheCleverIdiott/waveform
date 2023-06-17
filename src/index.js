import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
      <div style={{ alignSelf: 'right' }}>
        <img src='./hymet_logo.jpeg' style={{ alignItems: 'right' }} alt='hymet_logo'/>
      </div>
    </div>
  </React.StrictMode>
);


reportWebVitals();
