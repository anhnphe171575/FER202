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
import PlaylistAddForm from './Playlist/addPlayList';
import PlaylistUpdateForm from './Playlist/editPlayList';

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
                    <Route path='/userprofile/:uID'element={<Profile></Profile>} />
                    <Route path='/addPlaylist/' element={<PlaylistAddForm/>}/>
                    <Route path='/editplaylist/:pID' element={<PlaylistUpdateForm/>}/>

                </Routes>
                <MusicPlayer></MusicPlayer>
            </BrowserRouter>
    );
}

export default App; 