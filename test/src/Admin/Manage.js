import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar, Col, Row, Image, Carousel, NavDropdown, InputGroup, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderAdmin from './Header';

const ManageTable = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [artist, setArtist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    // Fetch categories from the backend
    fetch("http://localhost:9999/artist")
            .then(res => res.json())
            .then(result => setArtist(result))
            .catch(error => console.log(error));
    fetch("http://localhost:9999/categories")
      .then(res => res.json())
      .then(result => {
        setCategories(result);
      })
      .catch(error => console.log(error));

    // Fetch songs from the backend
    fetch('http://localhost:9999/listsongs')
      .then(response => response.json())
      .then(data => {
        let filteredSongs = data;
        if (search.length > 0) {
          filteredSongs = filteredSongs.filter(p =>
            removeDiacritics(p.title.toLowerCase()).includes(removeDiacritics(search.toLowerCase()))
          );
        }

        if (selectedCategory) {
          filteredSongs = filteredSongs.filter(p => p.categoryId === parseInt(selectedCategory))
        }
        setSongs(filteredSongs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [search,selectedCategory]);

  const removeDiacritics = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  };

  const handleDelete = (songId) => {
    if (window.confirm("Do you want to delete?")) {
      fetch("http://localhost:9999/listsongs/" + songId, { method: "DELETE" })
        .then(() => {
          alert("Delete success!");
          window.location.reload();
        })
        .catch(error => console.error('Error deleting data:', error));
    }
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleTogglePremium = async (songId, currentPremiumStatus) => {
    try {
      const response = await fetch(`http://localhost:9999/listsongs/${songId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ premium: !currentPremiumStatus }),
      });

      if (response.ok) {
        setSongs(songs.map(song => 
          song.id === songId ? { ...song, premium: !currentPremiumStatus } : song
        ));
        alert(`Song is now ${!currentPremiumStatus ? 'premium' : 'non-premium'}`);
      } else {
        throw new Error('Failed to update premium status');
      }
    } catch (error) {
      console.error('Error updating premium status:', error);
      alert('Failed to update premium status');
    }
  };
  return (
    <Container>
      <HeaderAdmin ></HeaderAdmin>
      <Row>
        <Col md={8}>
          <h1>Manage</h1>
        </Col>
        <Col md={3}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={e => setSearch(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col>
          <Link to={"/addsong"} className="btn btn-primary mb-3">
            Add
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={2}>
          <h4>Categories</h4>
          {categories.map(category => (
            <Row>
              <label>{category.name}<input type="radio" id={category.id} name="category" value={category.id}onChange={handleCategoryChange}/></label>
            </Row>
          ))}
        </Col>
        <Col md={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Src</th>
                <th>Artist</th>
                <th>Plays</th>
                <th>Category</th> {/* Updated header */}
                <th>Premium</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={index}>
                  <td>{song.id}</td>
                  <td>
                  <Link to={`/listsongs/${song.id}`}>
                    {song.title}
                   </Link> 
                    </td>
                  <td><img src={song.imgSrc} alt={song.title} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{song.src}</td>
                  <td>{artist?.find(c => c.id == song.artistID)?.name}</td>
                  <td>{song.plays}</td>
                  <td>{categories?.find(c => c.id == song.categoryId)?.name}</td> {/* Updated to show category name */}
                  <td>
                    <Button 
                      variant={song.premium ? "success" : "secondary"}
                      onClick={() => handleTogglePremium(song.id, song.premium)}
                    >
                      {song.premium ? "Premium" : "Set Premium"}
                    </Button>
                  </td>
                  <td>
                    <Link to="#" onClick={() => handleDelete(song.id)} className="btn btn-danger me-3">Delete</Link>
                    <Link to={`/edit/${song.id}`} className="btn btn-warning me-3">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

    </Container>
  );
};

export default ManageTable;