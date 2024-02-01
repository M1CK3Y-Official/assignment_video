'use client'
import { useRef } from 'react';
import styles from './ourVideoPlayer.module.css';
const OurVideoPlayer = ({path}) => {

    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    };

    const pauseVideo = () => {
        videoRef.current.pause();
    };

    const changeVolume = (e) => {
        videoRef.current.volume = e.target.value
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.ourVideo}>
                    <video src={path} ref={videoRef} controls muted></video>
            </div>
         
            <div className={styles.ourControls}>

                <div className={styles.ourCtrlBtn} onClick={playVideo}>Play</div>
                <div className={styles.ourCtrlBtn} onClick={pauseVideo}>Pause</div>

                <input type="range" min="0" max="1" step="0.01" onChange={changeVolume} />
            </div>
        </div>
    )
};
export default OurVideoPlayer