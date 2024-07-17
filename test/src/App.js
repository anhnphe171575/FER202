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
import PlaylistAddForm from './Playlist/addPlayList';
import PlaylistUpdateForm from './Playlist/editPlayList';
import Admin from './Admin/Admin';
import ManageAlbums from './Admin/ManageAlbum';
import ManageArtists from './Admin/ManageArtist';
import PlaylistComponent from './Playlist/Playlist';
import PlaylistDetail from './Playlist/PlaylistDetail';
import SongDetailad from './Admin/SongDetail';

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
                    <Route path='/userprofile/:uID'element={<Profile></Profile>} />
                    <Route path='/addPlaylist' element={<PlaylistAddForm/>}/>
                    <Route path='/editplaylist/:pID' element={<PlaylistUpdateForm/>}/>
                    <Route path='/Admin' element={<Admin/>}/>
                    <Route path='/ManageAlbum' element={<ManageAlbums/>}/>
                    <Route path='/ManageSong' element={<ManageTable/>}/>
                    <Route path='/ManageArtist' element={<ManageArtists/>}/>
                    <Route path='/playList' element={<PlaylistComponent/>}/>
                    <Route path='/playListDetail/:pid' element={<PlaylistDetail/>}/>
                    <Route path="/listsongs/:id" element={<SongDetailad/>} />


                </Routes>
            <MusicPlayer></MusicPlayer>
        </BrowserRouter>
    );
}

export default App; 