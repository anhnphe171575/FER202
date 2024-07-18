import React from 'react';
import ReactDOM from 'react-dom/client';
import Headerhomepage from './HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import HomePage from './HomePage/homepage';
// import Main from './HomePage/Main';
//  import Footer from './HomePage/Footer';
// import BXH from './HomePage/BXH';

// import { Row,Col, Container } from 'react-bootstrap';
// import Album from './Album/Album';
// import BXHAlbum from './Album/BxhAlbum';
// import Ranking from './BXH/BXH';
// import Login from './Login/Login';
// import Register from './Register/Register';
import Header from './Admin/Header';
import SongDetail from './SongDetails/SongDetails';
import App from './App'
import ManageTable from './Admin/Manage';
import { Container } from 'react-bootstrap';
import Profile from './Profile/Profile';
import HeaderAdmin from './Admin/Header';
import { BrowserRouter } from 'react-router-dom';

import PlaylistUpdateForm from './Playlist/addPlayList';
import ManageArtists from './Admin/ManageArtist';
import ManageAlbums from './Admin/ManageAlbum';




const root = ReactDOM.createRoot(document.getElementById('root'));





  root.render(
    <React.StrictMode>
      <App></App>  
      
      {/* <PlaylistUpdateForm>  </PlaylistUpdateForm> */}
      {/* <ManageArtists/> */}
      {/* <ManageAlbums/> */}
    </React.StrictMode>
  );

