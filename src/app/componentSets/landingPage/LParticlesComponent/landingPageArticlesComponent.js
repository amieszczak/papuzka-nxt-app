'use client'
import styles from './landingPageArticles.module.css';
import classes from '../../../page.module.css';
//
import Image from 'next/image';
//
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//
import LandingPageMarkup from '@/app/components/landingPageMarkup/landingPageMarkup';
import ArticlePreviewLandingPage from '@/app/components/articlePreview/landingPage/articlePreviewLandingPage';

export default function LandingPageArticlesComponent({posts}) {

    return(
        <div className={styles.container}>
            <div className={styles.topBlinder}></div>
            <LandingPageMarkup category='ARTYKUŁY' side='right'/>
            <div className={styles.presentationContainer}>
                <div className={styles.photoContainer}>
                    <div className={styles.photo}>
                        <Image
                            alt="telefon w ręku"
                            src='/articles.png'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className={styles.slogan}>
                    <div className={styles.topLine}></div>
                    <h2 className={classes.headingSecondary}>Udokumentowana terapia pomaga w <span>szybszym rozwoju.</span> Zapoznaj się z naszymi <span>artykułami</span></h2>
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
                centeredSlides={true}
                slidesPerView={2}
                breakpoints={{
                    1200: {
                        spaceBetween: 40,
                    },
                    
                    992: {
                        spaceBetween: 30,
                    },
                    
                    768: {
                        spaceBetween: 20,
                    },
                    
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    
                    450: {
                        slidesPerView: 1.75,
                    },

                    400: {
                        slidesPerview: 1.5, 
                    },

                    0: {
                        spaceBetween: 5,
                        slidesPerView: 1.25,
                    }
                }}
                >
                {posts?.map((item, index) => { 
                    return (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                       <ArticlePreviewLandingPage 
                        title={item?.node?.title} 
                        content={item?.node?.content} 
                        imageSrc={item?.node?.featuredImage?.node?.sourceUrl} 
                        refference={item?.node?.slug}/>        
                    </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
            <div className={styles.bottomBlinder}></div>
        </div>
    )
}