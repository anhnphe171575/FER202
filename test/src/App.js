import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/homepage';
import Ranking from './BXH/BXH';
import Album from './Album/Album';
import SongDetail from './SongDetails/SongDetails';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Home' element={<HomePage/>} />
            <Route path='/BXH' element={<Ranking></Ranking>} ></Route> 
            <Route path='/Album' element={<Album></Album>} ></Route> 
            <Route  path='/Login' element={<Login></Login>}></Route>
            <Route  path='/Register' element={<Register></Register>}></Route>
            <Route path='/song/:sID' element={<SongDetail />} ></Route> 
          </Routes>
        </BrowserRouter>
      );
}
export default App;
