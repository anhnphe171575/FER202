import React, { useState, useEffect, useRef, useContext  } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './SongDetails.css';
import Headerhomepage from '../HomePage/Header';
import { Link } from 'react-router-dom';



import { useSongId } from '../hooks/useSongId';


export default function SongDetail() {

    const [song, setSong] = useState([]);
    const [, setSongId] = useSongId();
    const { sID } = useParams();
    const [albums, setAlbums] = useState([]);
    const [songsBXH1, setSongsBXH1] = useState([]);
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9999/artist`)
            .then(res => res.json())
            .then(data => setArtists(data))
            .catch(e => console.log(e));
    }, []);
    console.log(sID);

    useEffect(()=> {
        setSongId(sID);
    }, [sID])
    useEffect(() => {
        fetch(`http://localhost:9999/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data))
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:9999/listsongs/${sID}`)
            .then(res => res.json())
            .then(data => {
                setSong(data);
                console.log("a");
            })
            .catch(e => console.log(e));
    }, [sID]);
     
   

    useEffect(() => {
        fetch(`http://localhost:9999/listsongs`)
            .then(res => res.json())
            .then(data => {
                const filteredSongs = data.filter(song => song.ranking >= 1 && song.ranking <= 10);
                setSongsBXH1(filteredSongs);
            })
            .catch(error => console.error('Error fetching and filtering songs:', error));
    }, []);
    const getArtistName = (artistID) => {
        const artist = artists.find(a => a.id === artistID);
        return artist ? artist.name : 'Unknown Artist';
    };
    return (
        <Container>
            <Row>
                <Headerhomepage />
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.5rem' }}><strong>{song.title}</strong></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Ca sĩ:</strong>{getArtistName(song.artistID)}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Thể loại:</strong>{song.categoryId} </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Lượt nghe:</strong>{song.plays} </p>
                        </Col>
                    </Row>
                    <Row className="icon-row" style={{ marginTop: "10px" }}>
                        <Col xs={6}>
                        </Col>
                        <Col>
                            <i className="bi bi-heart" style={{ padding: "5px" }}></i> Thêm Vào
                            <i className="bi bi-download" style={{ padding: "5px" }}></i> Tải Nhạc
                            <i className="bi bi-share" style={{ padding: "5px" }}></i> Chia Sẻ
                            <i className="bi bi-phone-vibrate" style={{ padding: "5px" }}></i> Nhạc Chờ
                        </Col>
                    </Row>
                    <Row style={{ border: '1px solid', marginTop: "20px" }}>
                        <h3> Lời bài hát: {song.title} </h3>
                        <p> {song.artist} </p>
                        <p>[Verse:]</p>
                        <pre>{song.lyrics}</pre>
                    </Row>
                    <Row style={{ lineHeight: "50px", marginTop: "20px" }}>
                        <Col md={3}><h1>Album</h1></Col>
                    </Row>
                    <hr />
                    <Row>
                        {albums.map((album, idx) => (
                            <Col md={3} key={idx}>
                                <Card className="mb-4 album-card">
                                    <Card.Img variant="top" src={album.cover} className="album-card-img" />
                                    <Card.Body>
                                        <Card.Title className="album-card-title">{album.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3} >
                    <Row>
                        <h4>Nghe Tiếp</h4>
                    </Row>
                    {songsBXH1.map((s, index) => (
                        <Row key={index} className="my-2">
                            <Col md='2' className={`index-color-${index + 1}`}>{index + 1}</Col>
                            <Col>
                                <Row>
                                    < Link to={`/song/${s.id}`}>{s.title}</Link>
                                </Row>
                                <Row>{s.artist}</Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};
