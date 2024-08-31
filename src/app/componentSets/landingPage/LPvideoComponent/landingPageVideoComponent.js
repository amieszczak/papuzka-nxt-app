import styles from './landingPageVideo.module.css';
import BackgroundVideo from 'next-video/background-video';
import entryVideo from '/videos/7424128-uhd_3840_2160_30fps.mp4'


export default function LandingPageVideoComponent() {
    return (
        <div className={styles.container}>
            <BackgroundVideo src={entryVideo} className={styles.video}/>
            <div className={styles.label}>
                <h2>W PAPUŻCE WIEMY JAK <span>ZAOPIEKOWAĆ MOWĘ</span></h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}></button>
                </div> 
            </div>
            <div className={styles.topBlinder}></div>
        </div>
    )
}