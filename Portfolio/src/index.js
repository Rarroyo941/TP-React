import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import Carrusel from './component/Carousel/Carousel';
import Blog from './component/Blog-Cards/Cards';
import Price from './component/Price-Cards/Price';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Carrusel />
    <Blog />
    <Price />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

