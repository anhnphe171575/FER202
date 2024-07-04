// MusicPlayerContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const savedState = localStorage.getItem('musicPlayerState');
    if (savedState) {
      const { song, playing, time } = JSON.parse(savedState);
      setCurrentSong(song);
      setIsPlaying(playing);
      setCurrentTime(time);
    }
  }, []);
        
  useEffect(() => {
    localStorage.setItem('musicPlayerState', JSON.stringify({
      song: currentSong,
      playing: isPlaying,
      time: currentTime
    }));
  }, [currentSong, isPlaying, currentTime]);

  return (
    <MusicPlayerContext.Provider value={{
      currentSong, setCurrentSong,
      isPlaying, setIsPlaying,
      currentTime, setCurrentTime
    }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};