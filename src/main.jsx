import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AdminPage from './AdminPage.jsx';

import './style.scss'

import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route index element={<App />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
)
