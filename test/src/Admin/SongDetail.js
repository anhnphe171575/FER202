import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const SongDetailad = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the song details
    fetch(`http://localhost:9999/listsongs/${id}`)
      .then(response => response.json())
      .then(data => setSong(data))
      .catch(error => console.error('Error fetching song details:', error));

    // Fetch artist details
    fetch('http://localhost:9999/artist')
      .then(response => response.json())
      .then(data => setArtist(data))
      .catch(error => console.error('Error fetching artists:', error));

    // Fetch category details
    fetch('http://localhost:9999/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  const artistName = artist.find(a => a.id === song.artistID)?.name || "Unknown Artist";
  const categoryName = categories.find(c => c.id === song.categoryId)?.name || "Unknown Category";

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={song.imgSrc} alt={song.title}       style={{ width: '600px' }}
 fluid />
        </Col>
        <Col md={6}>
          <h1>{song.title}</h1>
          <p><strong>Artist:</strong> {artistName}</p>
          <p><strong>Category:</strong> {categoryName}</p>
          <p><strong>Plays:</strong> {song.plays}</p>
          <p><strong>Ranking:</strong> {song.ranking}</p>
          <p><strong>Lyrics:</strong> {song.lyrics}</p>
          <audio controls>
            <source src={song.src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div>
            <Link to="/admin" className="btn btn-primary mt-3">Back to Manage</Link>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default SongDetailad;
