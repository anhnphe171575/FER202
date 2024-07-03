
import { Col, Container, Row, Card } from "react-bootstrap";
import './Album.css';
import Headerhomepage from "../HomePage/Header";
const albums = [
  { title: 'Tên Album 1', cover: './images/image1.jpg' },
  { title: 'Tên Album 2', cover: './images/image2.jpg' },
  { title: 'Tên Album 3', cover: './images/image3.jpg' },
  { title: 'Tên Album 4', cover: './images/image4.jpg' },
  { title: 'Tên Album 5', cover: './images/image1.jpg' },
  { title: 'Tên Album 6', cover: './images/image2.jpg' },
  { title: 'Tên Album 7', cover: './images/image3.jpg' },
  { title: 'Tên Album 8', cover: './images/image4.jpg' }
];
export default function Album() {
  return (
    <Container>
      <Row>
        <Headerhomepage></Headerhomepage>
      </Row>
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
