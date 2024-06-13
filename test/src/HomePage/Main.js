import { Col, Row, Card, Container } from "react-bootstrap";

export default function Main({ categories }) {
  const MusicCategory = ({ category }) => (
    <Container style={{marginBottom:"30px"}}>
      <Row><h2>{category.name}</h2></Row>
      <Row>
        {category.songs.map((song, index) => (
          <Col key={index} xs={2}>
            <Card>
              <Card.Img variant="top" src={song.imgSrc} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
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
