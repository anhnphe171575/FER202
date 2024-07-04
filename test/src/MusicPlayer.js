import React, { useContext, useEffect, useRef, useState } from 'react';
import { MusicPlayerContext } from './MusicPlayerContext';
import './MusicPlayer.css';

const MusicPlayer = () => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentLyric, setCurrentLyric] = useState("Nếu em nói mình xa nhau");
    const progressBarRef = React.useRef(null);
    const audioRef = useRef(new Audio());
    const [song, setSong] = useState([]);
    const lyrics = [
        { time: 0, text: "Nếu em nói mình xa nhau" },
        { time: 5, text: "Người ta sẽ không còn thấy nhau nữa" },
        { time: 10, text: "Và chúng ta sẽ mất nhau thật sao?" },
        // Thêm các dòng lời bài hát khác với thời gian tương ứng
    ];

    useEffect(() => {
        const savedSongId = localStorage.getItem('idsong');
        const parsedUser = JSON.parse(savedSongId);
        console.log(parsedUser)
        if (savedSongId) {
            fetch(`http://localhost:9999/listsongs/${parsedUser}`)
                .then(res => res.json())
                .then(data => setSong(data))
                .catch(e => console.log(e));
        }
    }, []);

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

        // Cập nhật lời bài hát
        const currentLyric = lyrics.reduce((prev, curr) => {
            if (audio.currentTime >= curr.time) {
                return curr;
            }
            return prev;
        });

        if (currentLyric.text !== currentLyric) {
            setCurrentLyric("");
            setTimeout(() => setCurrentLyric(currentLyric.text), 100);
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
    return (
        <div className="music-player">
        <div className="song-info">
            <img src={song.imgSrc} alt="Album cover" className="cover-art" />
            <div className="song-details">
                <h2 className="song-title">{song.title}</h2>
                <p className="artist">{song.artist}</p>
            </div>
        </div>
        {/* <div className="lyrics">{currentLyric}</div> */}
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
