import { Button, Container, Form, Nav, Navbar, Col, Row, Image, Carousel, NavDropdown, InputGroup } from 'react-bootstrap'
import Headerhomepage from './Header';
import Main from './Main';
import Footer from './Footer';
import BXH from './BXH';
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
            <BXH songs={songs}></BXH>
            </Col>
            </Row>
            </Container>
            <Row>
                <Footer></Footer>
             </Row>
            </Container>
    );}