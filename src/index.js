import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/FontFace.css';
import './index.css';
import './assets/css/PopoutSidebar.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';
import MasterLayout from './pages/MasterLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MasterLayout />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
