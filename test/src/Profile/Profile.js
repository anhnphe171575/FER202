import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';

const Profile = () => {
  const user = {
    name: 'Phú Thuận',
    id: '716840',
    dob: '20/02/2003',
    gender: 'Male',
    avatar: './images/image1.jpg',
    background: './image/image1.jpg',
    recentlyPlayed: [
      { title: 'Em bỏ hút thuốc chưa', artist: 'Bích Phương', imgSrc: '/path/to/song_image.jpg' },
      { title: 'Em bỏ hút thuốc chưa', artist: 'Bích Phương', imgSrc: '/path/to/song_image.jpg' }
    ],
    recommendedPlaylists: [
      { title: 'Nhạc sàn tung nóc', imgSrc: '/path/to/playlist_image.jpg' }
    ],
    recommendedAlbums: [
      { title: 'Nhạc sàn tung nóc', imgSrc: '/path/to/album_image.jpg' }
    ]
  };

  return (
    <Container fluid >
      <Row className="justify-content-center text-center py-5" style={{ backgroundImage: `url(${user.background})`, backgroundSize: 'cover', color: 'white' }}>
        <Col md={2}>
          <Image src={user.avatar} roundedCircle style={{ width: '150px', height: '150px' }} />
          <h2>{user.name}</h2>
          <p>ID: {user.id}</p>
          <p>Dob: {user.dob}</p>
          <p>Gender: {user.gender}</p>
        </Col>
        <Col></Col>
      </Row>
      <Container>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="playlist">Playlist</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tracks">Tracks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="albums">Albums</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="liked">Liked</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="mt-4">
          <Col md={8}>
            <h4>Vừa nghe</h4>
            {user.recentlyPlayed.map((song, index) => (
              <Row key={index} className="mb-3">
                <Col md={2}>
                  <Image src={song.imgSrc} thumbnail />
                </Col>
                <Col md={10}>
                  <p>{song.title} - {song.artist}</p>
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={4}>
            <h4>PlayList Gợi Ý</h4>
            {user.recommendedPlaylists.map((playlist, index) => (
              <Row key={index} className="mb-3">
                <Col md={4}>
                  <Image src={playlist.imgSrc} thumbnail />
                </Col>
                <Col md={8}>
                  <p>{playlist.title}</p>
                </Col>
              </Row>
            ))}
            <h4>Album</h4>
            {user.recommendedAlbums.map((album, index) => (
              <Row key={index} className="mb-3">
                <Col md={4}>
                  <Image src={album.imgSrc} thumbnail />
                </Col>
                <Col md={8}>
                  <p>{album.title}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;
