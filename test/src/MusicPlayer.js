import React, { useContext, useEffect, useRef, useState } from 'react';
import { MusicPlayerContext } from './MusicPlayerContext';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const { currentSong, isPlaying, setIsPlaying, currentTime, setCurrentTime } = useContext(MusicPlayerContext);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(new Audio());
    const progressBarRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (currentSong?.src) {
            audio.src = currentSong.src;
            audio.currentTime = currentTime;
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });

            if (isPlaying) {
                audio.play().catch(error => console.error("Playback failed:", error));
            } else {
                audio.pause();
            }

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('loadedmetadata', () => {});
            };
        }
    }, [currentSong, currentTime, isPlaying]);

    const updateProgress = () => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);
    };

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const clickPosition = (e.pageX - progressBarRef.current.offsetLeft) / progressBarRef.current.offsetWidth;
        const newTime = clickPosition * audio.duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    if (!currentSong) {
        return null; // Không hiển thị gì nếu không có bài hát
    }
    return (
        <div className="music-player">
            <div className="song-info">
                <img src={currentSong.imgSrc} alt="Album cover" className="cover-art" />
                <div className="song-details">
                    <h2 className="song-title">{currentSong.title}</h2>
                    <p className="artist">{currentSong.artist}</p>
                </div>
            </div>
            <div className="controls">
                <button className="play-pause" onClick={togglePlayPause}>
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <div className="progress-bar" ref={progressBarRef} onClick={handleProgressChange}>
                    <div
                        className="progress"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>
                <span className="time">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
            </div>
            <div className="quality">128kbps</div>
        </div>
    );
};

export default MusicPlayer;
