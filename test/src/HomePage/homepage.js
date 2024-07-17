import { Button, Container, Form, Nav, Navbar, Col, Row, Image, Carousel, NavDropdown, InputGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import Headerhomepage from './Header';
import Main from './Main';
import Footer from './Footer';
import BXH from './BXH';
import MusicPlayer from '../MusicPlayer';
import Carousel1 from './Carousel';

  const categories = [
    {
      name: 'Nhạc Trẻ',
      songs: [
        { id: 1, title: 'Lạc Trôi', imgSrc: '/images/lactroi.jpg' },
        { id: 2, title: 'Tên Bài Hát', imgSrc: '/images/image1.jpg' },
        { id: 3, title: 'Tên Bài Hát', imgSrc: '/images/image1.jpg' },
        { id: 4, title: 'Tên Bài Hát', imgSrc: '/images/image1.jpg' },
      ],
    },
    {
      name: 'Trữ Tình',
      songs: [
        { id: 5, title: 'Tên Bài Hát', imgSrc: '/images/image2.jpg' },
        { id: 6, title: 'Tên Bài Hát', imgSrc: '/images/image2.jpg' },
        { id: 7, title: 'Tên Bài Hát', imgSrc: '/images/image2.jpg' },
        { id: 8, title: 'Tên Bài Hát', imgSrc: '/images/image2.jpg' },
      ],
    },
    {
      name: 'Rap',
      songs: [
        { id: 9, title: 'Tên Bài Hát', imgSrc: '/images/image3.jpg' },
        { id: 10, title: 'Tên Bài Hát', imgSrc: '/images/image3.jpg' },
        { id: 11, title: 'Tên Bài Hát', imgSrc: '/images/image3.jpg' },
        { id: 12, title: 'Tên Bài Hát', imgSrc: '/images/image3.jpg' },
      ],
    },
    {
      name: 'Dân Ca',
      songs: [
        { id: 13, title: 'Tên Bài Hát', imgSrc: '/images/image4.jpg' },
        { id: 14, title: 'Tên Bài Hát', imgSrc: '/images/image4.jpg' },
        { id: 15, title: 'Tên Bài Hát', imgSrc: '/images/image4.jpg' },
        { id: 16, title: 'Tên Bài Hát', imgSrc: '/images/image4.jpg' },
      ],
    },
  ];
  
  
export default function HomePage() {
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
      const localSong = localStorage.getItem('selectedSong');
      console.log(localSong);
      if (localSong) {
          setSelectedSong(JSON.parse(localSong));
      }
  }, []);
    return (
      <div>
        <Container>
        <Row>
            <Headerhomepage/>
        </Row>
        <Row>
          <Carousel1></Carousel1>
        </Row>
            <Container style={{ marginTop:"50px"}}>
            <Row>
              <Col md={9}>
            <Main categories={categories} />
            </Col>
            <Col md={3}>
            <BXH></BXH>
            </Col>
            </Row>
            </Container>
            <Row>
                <Footer></Footer>
             </Row>
             
            </Container>
ư            </div>
    );}