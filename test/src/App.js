import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/homepage';
import Ranking from './BXH/BXH';
import Album from './Album/Album';
import SongDetail from './SongDetails/SongDetails';
import Login from './Login/Login';
import Register from './Register/Register';
import MusicPlayer from './MusicPlayer';
import SongList from './SongLists/SongList';
import Profile from './Profile/Profile';
import ManageTable from './Admin/Manage';
import AddSong from './Admin/AddSong';
import EditSong from './Admin/EditSong';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Home' element={<HomePage />} />
                    <Route path='/BXH' element={<Ranking />} />
                    <Route path='/Album' element={<Album />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/song/:sID' element={<SongDetail />} />
                    <Route path='/songlist/:aID' element={<SongList />} />
                    <Route path='/profile/:uID' element={<Profile />} />
                    <Route path='/admin' element={<ManageTable />} />
                    <Route path='/addsong' element={<AddSong />} />
                    <Route path='/edit/:eId' element={<EditSong />} />
                </Routes>
            <MusicPlayer></MusicPlayer>
        </BrowserRouter>
    );
}

export default App; 