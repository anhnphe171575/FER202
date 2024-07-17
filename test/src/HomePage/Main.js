import { Col, Row, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Main({ categories }) {
  const MusicCategory = ({ category }) => (
    <Container style={{marginBottom:"30px"}}>
      <Row><h2>{category.name}</h2></Row>
      <Row>
        {category.songs.map((song, index) => (
          <Col key={index} xs={3}>
             <Card >
      <Card.Img style={{ width: '200px' }} variant="top" src={song.imgSrc} />
      <Card.Body>
        <Card.Title>
          <Link to={`/song/${song.id}`}>{song.title}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );


  return (
    <Container style={{ marginBottom: "30px" }}>
      {categories.map((category) => (
        <React.Fragment key={category.id}>
          <h2>{category.name}</h2>
          <Row>
            {songs
              .filter(song => Number(song.categoryId) === Number(category.id))
              .map((song, index) => (
                <Col key={song.id} xs={3}>
                  <Card>
                    <Card.Img variant="top" src={song.imgSrc} />
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/song/${song.id}`}><p>{song.title}</p></Link>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </React.Fragment>
      ))}
    </Container>
  );
}