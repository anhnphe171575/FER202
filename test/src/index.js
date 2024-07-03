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
import Header from './SongDetails/Header';
import SongDetail from './SongDetails/SongDetails';
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    {/*<Headerhomepage/>
    <Container style={{ marginTop:"50px"}}>
    <Row>
      <Col md={8}>
    <Album albums={albums} />
    </Col>
    <Col md={4}>
    <BXHAlbum albums={albums} />
    </Col>
    </Row>
    </Container>
    <Footer/>*/}

      {/* <Login></Login> */}

    {/* <Register></Register> */}
    
    {/* <Headerhomepage/>
    <Ranking/>
    <Footer/> */}



    {/* <Header></Header>
    <SongDetail albums={albums}  songs={songs}></SongDetail>
    <Footer/>  */}
    <App></App>
    
  </React.StrictMode>
);

