import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import './SongList.css';
import Headerhomepage from '../HomePage/Header';
import { useSongId } from '../hooks/useSongId';


export default function SongList() {
    const [artists, setArtists] = useState([]);

    const [songs, setSongs] = useState([]);
    const [songplay, setSongplay] = useState(null);
    const [, setSongId] = useSongId();
    const { aID } = useParams();
    const [sid, setSongID1] = useState("");
    const [albums, setAlbums] = useState([]);
    const [songsBXH1, setSongsBXH1] = useState([]);
    const [currentPlayingId, setCurrentPlayingId] = useState(null);

    console.log(aID);
 
    useEffect(() => {
        fetch(`http://localhost:9999/artist`)
            .then(res => res.json())
            .then(data => setArtists(data))
            .catch(e => console.log(e));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:9999/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data))
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:9999/listsongs`)
            .then(res => res.json())
            .then(data => {        
                const filteredSongs = data.filter(song => song.ranking >= 1 && song.ranking <= 10);
                const albumSongs = data.filter(song => song.AlbumID === Number(aID));
                setSongs(albumSongs);
                console.log(albumSongs)
                setSongsBXH1(filteredSongs);
                if (albumSongs.length > 0) {
                    setSongplay(albumSongs[0]);
                    setSongID1(songplay.id);
                }
            })
            .catch(error => console.error('Error fetching and filtering songs:', error));
    }, [aID]);
    const onSongClick = (id) => {
        setCurrentPlayingId(id);
        handleSongClick(id);
    };
    const getArtistName = (artistID) => {
        const artist = artists.find(a => a.id === artistID);
        return artist ? artist.name : 'Unknown Artist';
    };
    const handleSongClick = (id) => {
        const selectedSong = songs.find(song => song.id === id);
        if (selectedSong) {
            setSongplay(selectedSong);
            setSongID1(id);
        }
    };
    useEffect(() => {
        setSongId(sid);
    }, [sid, setSongId]);

    return (
        <Container>
            <Row>
                <Headerhomepage />
            </Row>

            <Row>
                <Col md={8}>
                    {songs.map((s, index) => (
                        <Row key={s.id} style={{ border: "1px solid black", marginTop: "10px" }}>
                            <Col>
                                <p onClick={() => onSongClick(s.id)}>{currentPlayingId === s.id && <i className="bi bi-play-fill play-icon" style={{ padding: "5px" }}></i>}{index + 1}. {s.title} - {getArtistName(s.artistID)}
                                </p>
                            </Col>
                            <Col><p><i className="bi bi-heart" style={{ padding: "5px" }}></i> Thêm Vào
                                <i className="bi bi-download" style={{ padding: "5px" }}></i> Tải Nhạc
                                <i className="bi bi-share" style={{ padding: "5px" }}></i> Chia Sẻ
                                <i className="bi bi-phone-vibrate" style={{ padding: "5px" }}></i> Nhạc Chờ</p></Col>

                        </Row>
                    ))}
                    {songplay && (
                        <>
                            <Row>
                                <Col>
                                    <p style={{ fontSize: '1.5rem' }}><strong>{songplay.title}</strong></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{ fontSize: '1.2rem' }}><strong>Nhạc sĩ:</strong>  {getArtistName(songplay.artistID)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{ fontSize: '1.2rem' }}><strong>Thể loại:</strong> {songplay.categoryId}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{ fontSize: '1.2rem' }}><strong>Lượt nghe:</strong> {songplay.plays}</p>
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
                        <h3> Lời bài hát: {songplay.title}</h3>
                        <p>Ca sĩ :  {getArtistName(songplay.artistID)}</p>
                        <p>[Verse:]</p>
                        <pre>{songplay.lyrics}</pre>
                    </Row>
                    </>
                      )}
                    <Row style={{ lineHeight: "50px", marginTop: "20px" }}>
                        <Col md={3}><h1>Album</h1></Col>
                    </Row>
                    <hr />
                    <Row>
                        {albums.map((album, idx) => (
                            <Col md={3} key={idx} >
                                <Card className="mb-4 album-card">
                                    <Link to={`/songlist/${album.id}`}><Card.Img variant="top" src={album.cover} className="album-card-img" /></Link>
                                    <Card.Body>
                                <Link to={`/songlist/${album.id}`}><Card.Img variant="top" src={album.cover} className="album-card-img" /></Link>                                  
                                        <Card.Title className="album-card-title">{album.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <Row>
                        <h4>Nghe Tiếp</h4>
                    </Row>
                    {songsBXH1.map((s, index) => (
                        <Row key={index} className="my-2">
                            <Col md='2' className={`index-color-${index + 1}`}>{index + 1}</Col>
                            <Col>
                                <Row>
                                    <Link to={`/song/${s.id}`}>{s.title}</Link>
                                </Row>
                                <Row>{s.artist}</Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
