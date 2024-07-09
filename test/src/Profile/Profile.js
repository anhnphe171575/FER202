import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Nav, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useParams } from "react-router-dom";
import Headerhomepage from '../HomePage/Header';
import { Link } from 'react-router-dom';
export default function Profile() {
  const [user, setUser] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const { uID } = useParams();
  const [activeTab, setActiveTab] = useState('playlist');
  const [likedSongs, setLikedSongs] = useState([]);
  const [likedSongs1, setLikedSongs1] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/playlist`)
      .then(res => res.json())
      .then(data => {
        const data1 = data.filter(p => p.userid === uID);
        setPlaylist(data1)
      })
      .catch(e => console.log(e));
  }, []);

  const handleDeletePlaylist = (id) => {
    fetch(`http://localhost:9999/playlist/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setPlaylist(playlist.filter(pl => pl.id !== id));
      })
      .catch(e => console.log(e));
  };

  const handleDeleteLikeSong = (id) => {
    fetch(`http://localhost:9999/like/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setLikedSongs1(likedSongs1.filter(ls => ls.id !== id));
      })
      .catch(e => console.log(e));
  };


  const handleEditPlaylist = (id) => {
    // Redirect to edit page or handle edit functionality here
    window.location.href = `/editplaylist/${id}`;
  };
  useEffect(() => {
    fetch(`http://localhost:9999/like`)
      .then(res => res.json())
      .then(data => {
        const likedData = data.filter(l => l.userid === uID);
        console.log(likedData)
        setLikedSongs(likedData);
      })
      .catch(e => console.log(e));
  }, [uID]);

  useEffect(() => {
    fetch(`http://localhost:9999/listsongs`)
      .then(res => res.json())
      .then(data => {
        const filteredSongs = data.filter(song => likedSongs.some(ls => ls.trackid == song.id));
        console.log(filteredSongs)
        setLikedSongs1(filteredSongs);
      })
      .catch(error => console.error('Error fetching and filtering songs:', error));
  }, [likedSongs]);


  useEffect(() => {
    fetch(`http://localhost:9999/users/${uID}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <Container fluid >
      <Row>
        <Headerhomepage></Headerhomepage>
      </Row>
      <Row className="justify-content-center text-center py-5" style={{ backgroundImage: `url(/images/anhnencanhan.jpg)`, backgroundSize: 'cover', color: 'white' }}>
        <Col md={2}>
          <Image src={"/images/avataruser.png"} roundedCircle style={{ width: '150px', height: '150px' }} />
          <h2>{user.fullName}</h2>
          <p>ID: {user.id}</p>
          {/* <p>Dob: {user.dob}</p> */}
          <p>Gender: {user.Gender}</p>
        </Col>
        <Col></Col>
      </Row>
      <Container>
        <Nav justify variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="playlist">Playlist</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="liked">Liked</Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="mt-4">
          <Col md={8} className="mb-3">
            <Link to={`/addPlaylist`}><Button variant="primary" >Add Playlist</Button></Link>
          </Col>
          {activeTab === 'playlist' && playlist.map((pl, idx) => (

            <Col md={8}>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={pl.img} />
                  <Card.Body>
                    <Card.Title>{pl.title}</Card.Title>
                    <Button variant="warning" onClick={() => handleEditPlaylist(pl.id)}>Chỉnh sửa</Button>
                    <Button variant="danger" onClick={() => handleDeletePlaylist(pl.id)}>Xóa</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          ))
          }
          {activeTab === 'liked' && likedSongs1.map((song, idx) => (
            <Col md={8}>
              <Row key={idx} className="mb-3">
                <Col>
                  <Image src={song.imgSrc} thumbnail />
                </Col>
                <Col >
                  <p>{song.title} - {song.artist}</p>
                </Col>
                <Col>
                  <Button variant="danger" onClick={() => handleDeleteLikeSong(song.id)}>Xóa</Button>
                </Col>
              </Row>
            </Col>
          ))}
          <Col md={4}>
            {/* <h4>PlayList Gợi Ý</h4>
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
            ))} */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

