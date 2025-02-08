'use client';
import styles from './landingPageVideo.module.css';
import { useState, useEffect } from 'react';
//
import classNames from 'classnames';
import Image from 'next/image';


export default function LandingPageVideoComponent() {
    function scroll(element) {
        window.scrollTo({
            top: element.target.parentNode.parentNode.getBoundingClientRect().bottom, 
            left: 0,
            behavior: "smooth",
        })
    }

   
    const [scrollButtonHide, setScrollButtonHide] = useState(false);
    

    useEffect(() => {

        const handleScroll = () => {            
    
            if(window.scrollY == 0) {
                setScrollButtonHide(false);
            } else {
                setScrollButtonHide(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    useEffect(() => {
        console.log('scrolButtonHide:', scrollButtonHide);
    }, [scrollButtonHide])

    return (
        <div className={styles.container}>
            <Image
            layout="fill"
            alt="Dziecko podczas terapii"
            className={styles.video}
            src ="/8655048-sd_960_540_25fps.gif"
            />
            {/* <img alt="Dziecko podczas terapii" className={styles.video} src ="/8655048-sd_960_540_25fps.gif"/> */}
            <div className={styles.label}>
                <h2 className={classNames({[styles.textPosition]: scrollButtonHide})}>W PAPUŻCE WIEMY JAK <span>ZAOPIEKOWAĆ MOWĘ</span></h2> 
                <div className={styles.buttonContainer}>
                    <button className={classNames({[styles.button]: true, [styles.buttonHide]: scrollButtonHide})} onClick={scroll}></button>
                </div> 
            </div>
            <div className={styles.topBlinder}></div>
        </div>
    )
}