import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Playlist.css';
import Headerhomepage from '../HomePage/Header';

    const PlaylistComponent = () => {   
      const [playlist, setPlaylist] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:9999/playlist/`)
          .then(res => res.json())
          .then(data => setPlaylist(data))
          .catch(e => console.log(e));
      }, []);
    return (
      <Container>
        <Headerhomepage></Headerhomepage>
      <Row>
      <h2>Playlist</h2>
      {playlist.map((playlistItem, index) => (
          <Col key={index} md={4} lg={3} sm={6} xs={12}>

            <Card style={{ margin: '10px' }}>
            <a href={`/playListDetail/${playlistItem.id}`}>
            <Card.Img
                  className="card-img-top"
                  variant="top"
                  src={playlistItem.img || 'default-image-url.jpg'}
                  alt={playlistItem.name}

                />
              </a>
              <Card.Body>
                <Card.Title>
                  <a href={`/playListDetail/${playlistItem.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {playlistItem.title}
                  </a>
                </Card.Title>
                <Card.Text>{playlistItem.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlaylistComponent;