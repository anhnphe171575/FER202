import { Row, Col, Card, Container } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Playlist.css'

    const PlaylistComponent = () => {   
      
    return (
      <Container>
      <Row>
      <h2>Playlist</h2>
      {playlist.map((playlistItem, index) => (
          <Col key={index} md={4} lg={3} sm={6} xs={12}>
            <Card style={{ margin: '10px' }}>
              <a href="#">
                <Card.Img className="card-img-top" variant="top" src={playlistItem.img} />
              </a>
              <Card.Body>
                <Card.Title>
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {playlistItem.name}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}
export default PlaylistComponent;
