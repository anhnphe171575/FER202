
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import './Album.css';

export default function Album({ albums}) {
  return (
    <Container>
      <Row style={{ lineHeight: "50px"  }}>
        <Col md={3}><h1>Album</h1></Col>
        <Col md={2}>Mới nhất</Col>
        <Col md={2}>Nghe nhiều</Col>
      </Row>
      <hr/>
      <Row>
        {albums.map((album, index) => (          
          <Col key={index} md={3}>
            <Card className="mb-4 album-card">
              <Card.Img variant="top" src={album.cover} className="album-card-img" />
              <Card.Body>
                <Card.Title className="album-card-title">{album.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>         
        ))}
        </Row>
    </Container>
  );
}
