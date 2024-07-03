import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Headerhomepage from "../HomePage/Header";



const Ranking = () => {
  const [musicData, setMusicData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9999/listsongs`)
      .then(res => res.json())
      .then(data => {
        const filteredSongs = data.filter(song => song.ranking >= 1 && song.ranking <= 10);
        setMusicData(filteredSongs);
      })
      .catch(error => console.error('Error fetching and filtering songs:', error));
  }, []);
  return (
    <Container>
      <Row>
        <Headerhomepage></Headerhomepage>
      </Row>
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
                  <Image src={item.imgSrc} thumbnail />
                </Col>
                <Col xs={7}>
                  <h2>{item.title}</h2>
                  <p>{item.artist}</p>
                </Col>
                <Col xs={2}>
                  <Row>
                    <Col xs={4}><h4><i class="bi bi-suit-heart"></i></h4></Col>
                    <Col xs={4}><a href={`/song/${item.id}`}><h4><i class="bi bi-play-circle"></i></h4></a></Col>
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
