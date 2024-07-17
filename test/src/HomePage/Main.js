import { Col, Row, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
    <Container>
      {categories.map((category, index) => (
        <MusicCategory key={index} category={category} />
      ))}
    </Container>
  );
}
