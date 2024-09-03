'use client';
import styles from './landingPageVideo.module.css';
import BackgroundVideo from 'next-video/background-video';
import entryVideo from '/videos/7424128-uhd_3840_2160_30fps.mp4'
import { useState } from 'react';
//
import classNames from 'classnames';


export default function LandingPageVideoComponent() {
    function scroll(element) {
        window.scrollTo({
            top: element.target.parentNode.parentNode.getBoundingClientRect().bottom,
            left: 0,
            behavior: "smooth",
        })
    }

    const [scrollButtonHide, setScrollButtonHide] = useState(false);


    /* window.addEventListener('scroll', () => {
        setScrollButtonHide(!scrollButtonHide);
        if(window.scrollY == 0) {
            setScrollButtonHide(!scrollButtonHide);
        } 
    }) */

    return (
        <div className={styles.container}>
            <BackgroundVideo src={entryVideo} className={styles.video}/>
            <div className={styles.label}>
                <h2>W PAPUŻCE WIEMY JAK <span>ZAOPIEKOWAĆ MOWĘ</span></h2> {/* className={classNames({[styles.textPosition]: scrollButtonHide})} */}
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={scroll}></button>   {/* {classNames({[styles.button]: true, [styles.buttonHide]: scrollButtonHide})} */}
                </div> 
            </div>
            <div className={styles.topBlinder}></div>
        </div>
    )
}