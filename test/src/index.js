import React from 'react';
import ReactDOM from 'react-dom/client';
import Headerhomepage from './HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
// import Main from './HomePage/Main';
 import Footer from './HomePage/Footer';
// import BXH from './HomePage/BXH';
import { Row,Col, Container } from 'react-bootstrap';
// import Album from './Album/Album';
// import BXHAlbum from './Album/BxhAlbum';
// import Register from './Register/Register';
import Header from './SongDetails/Header';
import SongDetail from './SongDetails/SongDetails';
import HomePage from './HomePage/homepage';




const root = ReactDOM.createRoot(document.getElementById('root'));


const albums = [
  { title: 'Tên Album 1', cover: './images/image1.jpg' },
  { title: 'Tên Album 2', cover: './images/image2.jpg' },
  { title: 'Tên Album 3', cover: './images/image3.jpg' },
  { title: 'Tên Album 4', cover: './images/image4.jpg' },
  { title: 'Tên Album 5', cover: './images/image1.jpg' },
  { title: 'Tên Album 6', cover: './images/image2.jpg' },
  { title: 'Tên Album 7', cover: './images/image3.jpg' },
  { title: 'Tên Album 8', cover: './images/image4.jpg' }
];

root.render(
  <React.StrictMode>
  
    {/* <Headerhomepage></Headerhomepage>
    <Container style={{ marginTop:"50px"}}>
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

    {/* <Headerhomepage/>
    <Container style={{ marginTop:"50px"}}>
    <Row>
      <Col md={8}>
    <Album albums={albums} />
    </Col>
    <Col md={4}>
    <BXHAlbum albums={albums} />
    </Col>
    </Row>
    </Container>
    <Footer/> */}
    {/* <Register></Register> */}

    {/* <Header></Header>
  
    <SongDetail albums={albums}  songs={songs}></SongDetail>

    <Footer/>  */}
    <HomePage></HomePage>
  </React.StrictMode>
);

