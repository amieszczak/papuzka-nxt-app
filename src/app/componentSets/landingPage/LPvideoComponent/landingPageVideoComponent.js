'use client';
import styles from './landingPageVideo.module.css';
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


    window.addEventListener('scroll', (e) => {
        /* setScrollButtonHide(!scrollButtonHide); */
        if(globalThis.scrollY == 0) { 
            setScrollButtonHide(!scrollButtonHide);
        } 
    })

    return (
        <div className={styles.container}>
            <video className={styles.video} autoPlay loop muted preload="auto">
            <source src='/7424128-uhd_3840_2160_30fps.mp4' type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className={styles.label}>
                <h2 className={classNames({[styles.textPosition]: scrollButtonHide})}>W PAPUŻCE WIEMY JAK <span>ZAOPIEKOWAĆ MOWĘ</span></h2> {/* className={classNames({[styles.textPosition]: scrollButtonHide})} */}
                <div className={styles.buttonContainer}>
                    <button className={classNames({[styles.button]: true, [styles.buttonHide]: scrollButtonHide})} /* onClick={scroll} */></button>   {/* {classNames({[styles.button]: true, [styles.buttonHide]: scrollButtonHide})} */}  {/* className={styles.button} */}
                </div> 
            </div>
            <div className={styles.topBlinder}></div>
        </div>
    )
}