import { Col, Container, Row, Card, ListGroup, Image } from "react-bootstrap";
import './Playlist.css';

export default function PlaylistDetail({ playlists }) {
  return (
    <Container>
      {playlists.map((playlist, idx) => (
        <Card key={idx} className="mb-4">
          <Card.Img variant="top" src={playlist.img} className="playlist-card-img" />
          <Card.Body>
            <Card.Title>{playlist.name}</Card.Title>
            <ListGroup variant="flush">
              {playlist.songs.map((song, index) => (
                <ListGroup.Item key={index}>
                  <Row className="align-items-center">
                    <Col xs={2}>
                      <Image src={song.imgSrc} rounded fluid />
                    </Col>
                    <Col xs={10}>
                      {index + 1}. {song.title}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
