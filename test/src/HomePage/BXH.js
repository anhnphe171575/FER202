import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BXH.css'
const BXH = ({ songs }) => {
    return (
        <Container>
            <Col md={4}>
                <Row>
                    <h4>BXH Bài Hát</h4>
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
        </Container>
    );
};

export default BXH;
