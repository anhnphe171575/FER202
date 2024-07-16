import { Col, Row, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Main() {
  const [songs, setSongs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/listsongs`)
      .then(res => res.json())
      .then(data => {
        const filteredSongs = data
        setSongs(filteredSongs);
      })
      .catch(error => console.error('Error fetching and filtering songs:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9999/categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

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