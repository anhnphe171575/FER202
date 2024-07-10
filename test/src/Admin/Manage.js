import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import HeaderAdmin from './Header';

const ManageTable = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/listsongs')
    .then(response => response.json())
    .then(data => setSongs(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Row><HeaderAdmin/></Row>
      <Row>
        <Col md={10}>
      <h1>Manage</h1>
      </Col>
      <Col>
      <Button variant="primary" className="mb-3">Add new song</Button>
      </Col>
      </Row>
      <hr/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Src</th>
            <th>Artist</th>
            <th>Plays</th>
            <th>CategoryId</th>
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
              <td>{song.categoryId}</td>
              <td>{song.ranking}</td>
              <td>
                <Button variant="danger" className="me-2">delete</Button>
                <Button variant="warning">edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageTable;
