import React from 'react';
import ReactDOM from 'react-dom/client';
import Headerhomepage from './HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import Footer from './HomePage/Footer';
import BXH from './HomePage/BXH';


const songs = [
  { title: 'Thiên Lý Ơi', artist: 'Jack' },
  { title: 'Lạc Trôi', artist: 'Sơn Tùng M-TP' },
  { title: 'Em Gì Ơi', artist: 'Jack & K-ICM' },
  { title: 'Bạc Phận', artist: 'Jack & K-ICM' },
  { title: 'Hồng Nhan', artist: 'Jack' },
  { title: 'Sóng Gió', artist: 'Jack & K-ICM' },
  { title: 'Hoa Vô Sắc', artist: 'Jack & K-ICM' },
  { title: 'Là 1 Thằng Con Trai', artist: 'Jack' },
  { title: 'Hoa Hải Đường', artist: 'Jack' },
  { title: 'Đom Đóm', artist: 'Jack' }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   

    <Headerhomepage></Headerhomepage>
    <BXH songs={songs} />
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

