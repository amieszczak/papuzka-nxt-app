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
import ArticlePreview from '@/app/components/articlePreview/articlePreview';
import { articlesData } from '@/app/data/articlesData/articlesData';
import LandingPageMarkup from '@/app/components/landingPageMarkup/landingPageMarkup';

export default function LandingPageArticlesComponent() {
    return(
        <div className={styles.container}>
            <LandingPageMarkup category='ARTYKUŁY' side='right'/>
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
                <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                slidesPerView={2}
                spaceBetween={40}
                centeredSlides={true}
                /* onActiveIndexChange={(swiper) => setOfferId(swiper.realIndex + 1)} */
                >
                {articlesData.map((item) => {
                    return (
                    <SwiperSlide key={item.id}>
                       <ArticlePreview {...item} title={item.title} content={item.content} refference={item.refference} styleProp='landingPage'/>
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
    )
}