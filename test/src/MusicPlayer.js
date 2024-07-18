import React, { useEffect, useRef, useState } from 'react';
import './MusicPlayer.css';
import { useSongId } from './hooks/useSongId';
import { Row } from 'react-bootstrap';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
    const [songId] = useSongId();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const progressBarRef = useRef(null);
    const audioRef = useRef(new Audio());
    const [song, setSong] = useState({});
    const [plays, setPlays] = useState(0);
    const [viewIncremented, setViewIncremented] = useState(false);

    useEffect(() => {
        if (songId) {
            fetch(`http://localhost:9999/listsongs/${songId}`)
                .then(res => res.json())
                .then(data => {
                    setSong(data);
                    setPlays(data.plays || 0);
                    setViewIncremented(false); // Reset khi bài hát thay đổi
                })
                .catch(e => console.log(e));
        }
    }, [songId]);

    const incrementPlays = async () => {
        if (viewIncremented) return; // Không tăng nếu đã tăng rồi

        const newPlays = plays + 1;
        setPlays(newPlays);

        try {
            const response = await fetch(`http://localhost:9999/listsongs/${songId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plays: newPlays }),
            });

            if (!response.ok) {
                throw new Error('Failed to update play count');
            }
        } catch (error) {
            console.error('Error updating play count:', error);
            // Có thể thêm xử lý lỗi ở đây, ví dụ: hiển thị thông báo cho người dùng
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (song.src) {
            audio.src = song.src;
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('loadedmetadata', () => { });
            };
        }
    }, [song]);

    const updateProgress = () => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);

        // Kiểm tra nếu đã phát qua nửa bài và chưa tăng lượt xem
        if (audio.currentTime > audio.duration / 2 && !viewIncremented) {
            incrementPlays();
            setViewIncremented(true);
        }
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

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (isMuted) {
            audio.volume = volume;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    };

    return songId ? (
        <div className="music-player">
            <div className="player-content">
                <div className="song-info">
                    <img src={song.imgSrc} alt="Album cover" className="cover-art" />
                    <div className="song-details">
                        <h2 className="song-title">{song.title}</h2>
                        <p className="artist">{song.artist}</p>
                    </div>
                </div>
                <div className="controls" style={{ marginLeft:"20%"}}>
                    <button className="play-pause" onClick={togglePlayPause}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <span className="time">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>
            </div>
            <Row className="progress-container">
                <div className="progress-bar" ref={progressBarRef} onClick={handleProgressChange}>
                    <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
            </Row>
            <Row className="volume-control">
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                <button onClick={toggleMute}>
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                />
                </div>
            </Row>
            <Row className="quality" style={{justifyContent:"flex-end"}}>128kbps</Row>
            <Row className="play-count" style={{justifyContent:"flex-start"}}>Plays: {plays}</Row>
        </div>
    ) : null;
};

export default MusicPlayer; 