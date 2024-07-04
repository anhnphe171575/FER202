import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './BXH.css'
const BXH = () => {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9999/listsongs`)
            .then(res => res.json())
            .then(data => {
                const filteredSongs = data.filter(song => song.ranking >= 1 && song.ranking <= 10);
                setSongs(filteredSongs);
            })
            .catch(error => console.error('Error fetching and filtering songs:', error));
    }, []);
    return (
        <Container>
            <Col >
                <Row>
                    <h4>BXH Bài Hát</h4>
                </Row>
                {songs.map((song, index) => (
                    <Row key={index} className="my-2">
                        <Col md='2' className={`index-color-${index + 1}`}>{index + 1}</Col>
                        <Col>
                            <Row><Link to={`/song/${song.id}`}>{song.title}</Link></Row>
                            <Row>{song.artist}</Row>
                        </Col>
                    </Row>
                ))}
            </Col>
        </Container>
    );
};

export default BXH;
