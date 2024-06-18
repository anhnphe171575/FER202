
import React from 'react';
import { Container, Row, Col, ProgressBar, Image, Button, Card } from 'react-bootstrap';
import './SongDetails.css'; // Custom CSS for further styling

const SongDetail = ({ albums, songs }) => {
    const currentProgress = 29.6734;
    const bufferProgress = 36.9574;
    const currentTime = "01:36";
    const totalTime = "03:40";

    return (
        <Container style={{marginTop:"60px"}}>
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


                    <Row className="music-player-container">

                        <Row>
                            <Col xs={2}>
                                <Image src="./images/image1.jpg" className="album-cover" rounded />
                            </Col>
                            <Col xs={10} className="lyrics-section">
                                <div className="lyrics">
                                    <p>Nên tuyến lệ này không ướt</p>
                                    <p className="highlight">Không còn ai bạn tâm lưu luyến gì</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="progress-section">
                            <Col xs={1}>
                                <Button variant="link" className="play-button">
                                    <i className="fas fa-play"></i>
                                </Button>
                            </Col>
                            <Col xs={10} className="progress-bar-container">
                                <ProgressBar>
                                    <ProgressBar now={bufferProgress} variant="info" key={1} className="buffer-bar" />
                                    <ProgressBar now={currentProgress} variant="primary" key={2} className="current-bar" />
                                </ProgressBar>
                                <div className="time-display">{currentTime} / {totalTime}</div>
                            </Col>
                            <Col xs={1} className="extra-info">
                                <Button variant="outline-light" size="sm">128kbps</Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row class="icon-row" style={{marginTop:"10px"}}>
                        <Col xs={6}>
                            
                        </Col>
                        <Col>
                        <i className="bi bi-heart" style={{padding:"5px"}}></i> Thêm Vào
                            <i className="bi bi-download" style={{padding:"5px"}}></i> Tải Nhạc
                            <i className="bi bi-share" style={{padding:"5px"}}></i> Chia Sẻ
                            <i className="bi bi-phone-vibrate" style={{padding:"5px"}}></i> Nhạc Chờ
                        </Col>
                        
                    </Row>
                    <Row style={{ border: '1px solid', marginTop:"20px"}}>
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
                    <Row style={{ lineHeight: "50px", marginTop:"20px"}}>
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
