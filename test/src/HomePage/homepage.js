import { Button, Container, Form, Nav, Navbar, Col, Row, Image, Carousel, NavDropdown, InputGroup } from 'react-bootstrap'

import Headerhomepage from './Header';
import Main from './Main';
import Footer from './Footer';
import BXH from './BXH';

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

    return (
        <Container>
        <Row>
            <Headerhomepage/>
        </Row>
            <Container style={{ marginTop:"50px"}}>
            <Row>
              <Col md={8}>
            <Main categories={categories} />
            </Col>
            <Col md={4}>
            <BXH></BXH>
            </Col>
            </Row>
            </Container>
            <Row>
                <Footer></Footer>
             </Row>
            </Container>
    );}