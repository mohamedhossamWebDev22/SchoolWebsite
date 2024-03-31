import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './style.scss'

import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
