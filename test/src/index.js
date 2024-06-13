import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    <BXH songs={songs} />
  </React.StrictMode>
);
