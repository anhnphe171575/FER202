import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';

const musicData = [
  {
    rank: 1,
    title: 'Ngày Đẹp Trời Để Nói Chia Tay',
    artist: 'Lou Hoàng',
    image: './images/image3.jpg',
  },
  {
    rank: 2,
    title: 'Cẩm Tú Cầu',
    artist: 'RayO, Huỳnh Vấn',
    image: './images/image2.jpg',
  },
  {
    rank: 3,
    title: 'Hứa Đợi Nhưng Chẳng Tới',
    artist: 'Vương Thiên Tuấn, Lâm Tuấn',
    image: './images/image1.jpg',
  },
  {
    rank: 4,
    title: 'ABCD',
    artist: 'NAYEON (TWICE)',
    image: './images/image1.jpg',
  },
  {
    rank: 5,
    title: 'Anh Thôi Nhân Nhượng (Cover)',
    artist: 'Kiều Chi',
    image: './images/image2.jpg',
  },
  {
    rank: 6,
    title: 'Quân Tử Ý',
    artist: 'Lê Bảo Bình',
    image: './images/image3.jpg',
  },
];

const Ranking = () => {
  return (
    <Container>
      <Row><h2 className="my-4">Bảng xếp hạng Trending Music</h2></Row>
      <Row>
      <ListGroup>
        {musicData.map((item) => (
          <ListGroup.Item key={item.rank}>
            <Row>
              <Col xs={1} className="text-center">
                <h2>{item.rank}</h2>
              </Col>
              <Col xs={2}>
                <Image src={item.image} thumbnail />
              </Col>
              <Col xs={7}>
                <h2>{item.title}</h2>
                <p>{item.artist}</p>
              </Col>
              <Col xs={2}>
              <Row>
              <Col xs={4}><h4><i class="bi bi-suit-heart"></i></h4></Col>
              <Col xs={4}><h4><i class="bi bi-play-circle"></i></h4></Col>
              <Col xs={4}><h4><i class="bi bi-share"></i></h4></Col>
              </Row>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Row>
    </Container>
  );
};

export default Ranking;
