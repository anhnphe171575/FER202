import React from 'react';
import ReactDOM from 'react-dom/client';
import Headerhomepage from './HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import Main from './HomePage/Main';
import Footer from './HomePage/Footer';
import BXH from './HomePage/BXH';
import { Row,Col, Container } from 'react-bootstrap';
import Register from './Register/Register';


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
    
    {/* <Headerhomepage></Headerhomepage>
    // <Container style={{ marginTop:"50px"}}>
    <Row>
      <Col md={8}>
    <Main categories={categories} />
    </Col>
    <Col md={4}>
    <BXH songs={songs} />
    </Col>
    </Row>
    </Container>
    <Footer></Footer> */}
    <Register></Register>
  </React.StrictMode>
);

