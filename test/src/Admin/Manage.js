import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderAdmin from './Header';

const ManageTable = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
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
        setSongs(filteredSongs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [search]);

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

  return (
    <div>
      <HeaderAdmin setSearch={setSearch}></HeaderAdmin>
      <Row><HeaderAdmin/></Row>
      <Row>
        <Col md={10}>
          <h1>Manage</h1>
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
              <input type="radio" id={category.id} name="category" value={category.id} />
              <label>{category.name}</label>
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
                <th>Ranking</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={index}>
                  <td>{song.id}</td>
                  <td>{song.title}</td>
                  <td><img src={song.imgSrc} alt={song.title} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{song.src}</td>
                  <td>{song.artist}</td>
                  <td>{song.plays}</td>
                  <td> {categories?.find(c => c.id == song.categoryId)?.name}</td> {/* Updated to show category name */}
                  <td>{song.ranking}</td>
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

    </div>
  );
};

export default ManageTable;