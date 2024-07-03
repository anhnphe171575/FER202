import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

import './SongDetails.css';
import Headerhomepage from '../HomePage/Header';


export default function SongDetail() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentLyric, setCurrentLyric] = useState("Nếu em nói mình xa nhau");
    const progressBarRef = React.useRef(null);
    const { sID } = useParams();
    const [albums, setAlbums] = useState([]);
    const [songsBXH, setSongsBXH] = useState([]);
    const [songsBXH1, setSongsBXH1] = useState([]);

    const [song, setSong] = useState([]);
    const audioRef = useRef(new Audio());

    const lyrics = [
        { time: 0, text: "Nếu em nói mình xa nhau" },
        { time: 5, text: "Người ta sẽ không còn thấy nhau nữa" },
        { time: 10, text: "Và chúng ta sẽ mất nhau thật sao?" },
        // Thêm các dòng lời bài hát khác với thời gian tương ứng
    ];

    useEffect(() => {
        fetch(`http://localhost:9999/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data))
            .catch(e => console.log(e));

    }, []);


    useEffect(() => {
        fetch(`http://localhost:9999/listsongs/${sID}`)
            .then(res => res.json())
            .then(data => setSong(data))
            .catch(e => console.log(e));

    }, []);

    useEffect(() => {
        fetch(`http://localhost:9999/listsongs`)
            .then(res => res.json())
            .then(data => {
                const filteredSongs = data.filter(song => song.ranking >= 1 && song.ranking <= 10);
                setSongsBXH1(filteredSongs);
            })
            .catch(error => console.error('Error fetching and filtering songs:', error));
    }, []);


    useEffect(() => {
        const audio = audioRef.current;
        if (song.src) {
            audio.src = song.src;
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('loadedmetadata', () => { });
            };
        }
    }, [song]);

    const updateProgress = () => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);

        // Cập nhật lời bài hát
        const currentLyric = lyrics.reduce((prev, curr) => {
            if (audio.currentTime >= curr.time) {
                return curr;
            }
            return prev;
        });

        if (currentLyric.text !== currentLyric) {
            setCurrentLyric("");
            setTimeout(() => setCurrentLyric(currentLyric.text), 100);
        }
    };

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const clickPosition = (e.pageX - progressBarRef.current.offsetLeft) / progressBarRef.current.offsetWidth;
        const newTime = clickPosition * audio.duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Container>
            <Row>
                <Headerhomepage></Headerhomepage>
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
                            <p style={{ fontSize: '1.2rem' }}><strong>Nhạc sĩ:</strong>{song.artist}</p>
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
                    <Row>
                        <div className="music-player">
                            <div className="song-info">
                                <img src={song.imgSrc} alt="Album cover" className="cover-art" />
                                <div className="song-details">
                                    <h2 className="song-title">{song.title}</h2>
                                    <p className="artist">{song.artist}</p>
                                </div>
                            </div>
                            {/* <div className="lyrics">{currentLyric}</div> */}
                            <div className="controls">
                                <button className="play-pause" onClick={togglePlayPause}>
                                    {isPlaying ? '⏸' : '▶'}
                                </button>
                                <div className="progress-bar" ref={progressBarRef} onClick={handleProgressChange}>
                                    <div
                                        className="progress"
                                        style={{ width: `${(currentTime / duration) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="time">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                            </div>
                            <div className="quality">128kbps</div>
                        </div>
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
                        <h3> Lời bài hát: Em Gì Ơi</h3>
                        <p>Nhạc sĩ : ICM,jack</p>
                        <p>[Verse:]</p>
                        <p>Đừng khóc như thế xin đừng khóc như thế</p>
                        <p>Bao nhiêu niềm đau chôn giấu mong ngày sẽ trôi mau</p>
                        <p>Đời phong ba độc thân bước chân sơn hà</p>
                        <p>Buổi sáng hôm ấy khi còn trắng sương mây</p>
                        <p>Ta như là gió phiêu lãng mang hành lý thương nhớ</p>
                        <p>Chẳng sao đâu sầu mi có khi còn lâu</p>
                        <p>[Pre chorus:]</p>
                        <a href=''>Xem toàn bộ</a>
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
                                    <a href={`/song/${s.id}`}>{s.title}</a>
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

