import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.slim.js';
import Main from './HomePage/Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
const categories = [
  {
    name: 'Nhạc Trẻ',
    songs: [
      { title: 'Tên Bài Hát', imgSrc: './images/image1.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image1.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image1.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image1.jpg' },
    ],
  },
  {
    name: 'Trữ Tình',
    songs: [
      { title: 'Tên Bài Hát', imgSrc: './images/image2.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image2.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image2.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image2.jpg' },
    ],
  },
  {
    name: 'Rap',
    songs: [
      { title: 'Tên Bài Hát', imgSrc: './images/image3.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image3.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image3.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image3.jpg' },
    ],
  },
  {
    name: 'Dân Ca',
    songs: [
      { title: 'Tên Bài Hát', imgSrc: './images/image4.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image4.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image4.jpg' },
      { title: 'Tên Bài Hát', imgSrc: './images/image4.jpg' },
    ],
  },
];
root.render(
  <React.StrictMode>
    <Main categories={categories} />
  </React.StrictMode>
);

