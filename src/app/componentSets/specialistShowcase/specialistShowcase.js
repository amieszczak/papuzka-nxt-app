'use client';
import styles from './specialistShowcase.module.css';
import { specialistShowcaseData } from '@/app/data/SpecialistsData/specialistShowcaseData';
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//
import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

export default function SpecialistShowcase() {

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <article>
            <div classNames={styles.container}>
                <h2>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECIALISTÓW</h2>
                <div classNames={styles.carouselContainer}>
                    <Swiper
                        className={styles.swiper}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        /* autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }} */
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={40}
                        onActiveIndexChange={(swiper) => {
                        setActiveIndex(swiper.realIndex)
                        console.log(swiper.realIndex);
                        }}
                        >
                        {specialistShowcaseData.map(item => {
                            return (
                                <SwiperSlide key={item.id} className={classNames({[styles.therapistPhotoContainer]:true, [styles.therapistPhotoContainerActive]: item.id === activeIndex})}>
                                    <Image src={item.src} 
                                        alt={item.alt}
                                        width={500}
                                        height={500}
                                        className={styles.therapistPhoto} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </article>
    )
}