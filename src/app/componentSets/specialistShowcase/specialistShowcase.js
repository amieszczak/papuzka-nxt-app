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
import Link from 'next/link';
//
import { useState } from 'react';
import classNames from 'classnames';

export default function SpecialistShowcase() {

    const [activeIndex, setActiveIndex] = useState(1);

    const selectedDescription = specialistShowcaseData.find(item => item.id === activeIndex);

    return (
        <article>
            <div className={styles.container}>
                <h2 className={styles.containerHeading}>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECIALISTÓW</h2>
                <div className={styles.carouselContainer}>
                    <Swiper
                        className={styles.swiper}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={2.75}
                        centeredSlides={true}
                        spaceBetween={40}
                        slideToClickedSlide={true}
                        onActiveIndexChange={(swiper) => {
                        setActiveIndex(swiper.realIndex)
                        console.log(swiper.realIndex);
                        }}
                        >
                        {specialistShowcaseData.map(item => {
                            return (
                                <SwiperSlide key={item.id} className={classNames({[styles.therapistPhotoContainer]:true, [styles.therapistPhotoContainerActive]: item.id === activeIndex})} onClick={() => setActiveIndex(item.id)}>
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
                {selectedDescription ? 
                    <div className={styles.descriptionContainer}>
                        <h2 className={styles.descriptionHeading}>{selectedDescription.name}</h2> 
                        <p>{selectedDescription.description}</p> 
                        <div className={styles.linkContainer}>
                            <Link href={selectedDescription.href} className={styles.link}>umów się na bezpłatną wizytę</Link>
                        </div>
                    </div>
                : null}
            </div>
        </article>
    )
}