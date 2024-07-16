import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './PlaylistUpdateForm.css';

const PlaylistAddForm = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [singer, setSinger] = useState('');
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [songs, setSongs] = useState([]);
    const [songSearch, setSongSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser); // Parse if it's a JSON string
                setUser(parsedUser); // Set user state
            } catch (error) {
                console.error('Error parsing stored user:', error);
                // Handle parsing error if necessary
            }
        }
    }, []);  
    
    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSongSearchChange = (e) => {
        setSongSearch(e.target.value);
    };

    useEffect(() => {
        fetch(`http://localhost:9999/categories`)
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        if (songSearch.trim() !== '') {
            fetch(`http://localhost:9999/listsongs`)
                .then(res => res.json())
                .then(data => {
                    const filteredSongs = data.filter(p => p.title.toLowerCase().includes(songSearch.toLowerCase()));
                    setSearchResult(filteredSongs);
                })
                .catch(e => console.log(e));
        } else {
            setSearchResult([]);
        }
    }, [songSearch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const songIds = songs.map(song => song.id);
        const newPlayList = {
            title: playlistName,
            userid: user.id,
            img: image,
            description: description,
            trackid: songIds
        };
        fetch("http://localhost:9999/playlist", {
            method: "POST",
            body: JSON.stringify(newPlayList),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(resp => resp.json())
            .then(productCreated => {
                alert("Create success! Id: " + productCreated.id);
                window.location.href = `/userprofile/${user.id}`;
            })
            .catch(err => console.log(err));

        console.log({ playlistName, image, description, songs });
    };

    const removeSong = (index) => {
        setSongs(songs.filter((_, i) => i !== index));
    };

    const addSong = (song) => {
        if (!songs.some(s => s.id === song.id)) {
            setSongs([...songs, song]);
            setSongSearch('');
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">CẬP NHẬT PLAYLIST</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formPlaylistName">
                    <Form.Label column sm={2} className="form-label">Tên Playlist</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                            placeholder="Tên Playlist"
                            className="form-control"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formImage">
                    <Form.Label column sm={2} className="form-label">Hình ảnh playlist</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="form-control"
                        />
                        <Form.Text className="form-text">
                            (Hình tối thiểu 500 x 500 pixels. Nếu nhỏ hơn sẽ bị mất hình và lấy hình mặc định của NhacCuaTui)
                        </Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formDescription">
                    <Form.Label column sm={2} className="form-label">Mô tả</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Mô tả"
                            className="form-control"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formSongs">
                    <Form.Label column sm={2} className="form-label">Danh sách bài hát</Form.Label>
                    <Col sm={10}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nhập từ khóa hoặc link bài hát"
                                value={songSearch}
                                onChange={handleSongSearchChange}
                            />
                        </InputGroup>
                        <ListGroup>
                            {searchResult.map((song, index) => (
                                <ListGroup.Item key={index}>
                                    {song.title}
                                    <Button variant="outline-secondary" onClick={() => addSong(song)} className="float-end">
                                        Thêm
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <ListGroup>
                            {songs.map((song, index) => (
                                <ListGroup.Item key={index}>
                                    {song.title}
                                    <Button variant="danger" size="sm" onClick={() => removeSong(index)} className="float-end">
                                        Xóa
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary">Cập nhật</Button>
            </Form>
        </div>
    );
};

export default PlaylistAddForm;
