'use client'
import styles from './landingPageArticles.module.css';
//
import Image from 'next/image';
//
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//

export default function LandingPageArticlesComponent() {
    return(
        <div className={styles.container}>
            <div className={styles.presentationContainer}>
                <div className={styles.photoContainer}>
                    <div className={styles.photo}>
                        <Image
                            src='/articles.png'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className={styles.slogan}>
                    <div className={styles.topLine}></div>
                    <h2>Udokumentowana terapia pomaga w <span>szybszym rozwoju.</span> Zapoznaj się z naszymi <span>artykułami</span></h2>
                </div>
            </div>
            <div className={styles.sliderContainer}>

            </div>
        </div>
    )
}