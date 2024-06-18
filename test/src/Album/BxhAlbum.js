
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import './Album.css';

export default function BXHAlbum({ albums}) {
  return (
    <Container>
          <Row>
            <Card.Img variant="top" src="./images/image2.jpg" className="album-card-img" />
          </Row>
          <Row style={{margin:"20px auto"}}>
            <Row style={{textAlign:"center"}}><h3>BXH Album</h3></Row>
            <Row>
            <ListGroup>
              {albums.map((item, index) => (
                <ListGroup.Item key={index} variant={index === 0 ? 'danger' : index === 1 ? 'warning' : index === 2 ? 'success' : ''}>
                  {index + 1}. {item.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
            </Row>
          </Row>
    </Container>
  );
}
