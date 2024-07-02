import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SongDetails.css';

const SongDetail = ({ albums, songs }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentLyric, setCurrentLyric] = useState("Nếu em nói mình xa nhau");
    const audioRef = React.useRef(new Audio('./LacTroiTripleDRemix-SonTungMTP-5164670.mp3'));
    const progressBarRef = React.useRef(null);

    // const lyrics = [
    //     { time: 0, text: "Nếu em nói mình xa nhau" },
    //     { time: 5, text: "Người ta sẽ không còn thấy nhau nữa" },
    //     { time: 10, text: "Và chúng ta sẽ mất nhau thật sao?" },
    //     // Thêm các dòng lời bài hát khác với thời gian tương ứng
    // ];

    // useEffect(() => {
    //     const audio = audioRef.current;
    //     audio.addEventListener('timeupdate', updateProgress);
    //     audio.addEventListener('loadedmetadata', () => {
    //         setDuration(audio.duration);
    //     });

    //     return () => {
    //         audio.removeEventListener('timeupdate', updateProgress);
    //         audio.removeEventListener('loadedmetadata', () => {});
    //     };
    // }, []);

    // const updateProgress = () => {
    //     const audio = audioRef.current;
    //     setCurrentTime(audio.currentTime);

    //     // Cập nhật lời bài hát
    //     const currentLyric = lyrics.reduce((prev, curr) => {
    //         if (audio.currentTime >= curr.time) {
    //             return curr;
    //         }
    //         return prev;
    //     });

    //     if (currentLyric.text !== currentLyric) {
    //         setCurrentLyric("");
    //         setTimeout(() => setCurrentLyric(currentLyric.text), 100);
    //     }
    // };

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
        <Container style={{ marginTop: "60px" }}>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.5rem' }}><strong>Em Gì Ơi - Jack ,K-ICM</strong></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Nhạc sĩ:</strong> Jack ,K-ICM</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Thể loại:</strong> Nhạc Trẻ</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: '1.2rem' }}><strong>Lượt nghe:</strong> 1,000,000</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="music-player">
                            <div className="song-info">
                                <img src="album-cover.jpg" alt="Album cover" className="cover-art" />
                                <div className="song-details">
                                    <h2 className="song-title">Ngày Đẹp Trời Để Nói Chia Tay</h2>
                                    <p className="artist">Lou Hoàng</p>
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
                                        style={{width: `${(currentTime / duration) * 100}%`}}
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
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3} >
                    <Row>
                        <h4>Nghe Tiếp</h4>
                    </Row>
                    {songs.map((song, index) => (
                        <Row key={index} className="my-2">
                            <Col md='2' className={`index-color-${index + 1}`}>{index + 1}</Col>
                            <Col>
                                <Row>{song.title}</Row>
                                <Row>{song.artist}</Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default SongDetail;