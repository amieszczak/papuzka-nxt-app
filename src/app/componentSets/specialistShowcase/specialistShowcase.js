'use client';
import styles from './specialistShowcase.module.css';
import classes from '../../page.module.css';
import classNames from 'classnames';
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

export default function SpecialistShowcase() {

    const [activeIndex, setActiveIndex] = useState(1);

    const selectedDescription = specialistShowcaseData.find(item => item.id === activeIndex);

    return (
        <article>
            <div id="specialists" className={styles.container}>
                <h2 className={classNames({[styles.containerHeading]:true, [classes.headingSecondary]:true})}>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECIALISTÓW</h2>
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
                        onActiveIndexChange={(swiper) => {
                        setActiveIndex(swiper.realIndex)
                        }}
                        >
                        {specialistShowcaseData.map(item => {
                            return (
                                <SwiperSlide key={item.id} className={classNames({[styles.therapistPhotoContainer]:true, [styles.therapistPhotoContainerActive]: item.id === activeIndex})} onClick={() => setActiveIndex(item.id)}>
                                    <Image src={item.src} 
                                        alt={item.name}
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
                        <h2 className={classNames({[styles.descriptionHeading]:true, [classes.headingSecondary]:true})}>{selectedDescription.name}</h2> 
                        <p className={classes.paragraphPrimary}>{selectedDescription.description}</p> 
                        <div className={styles.linkContainer}>
                            <Link href={selectedDescription.href} className={styles.link}>umów się na bezpłatną wizytę</Link>
                        </div>
                    </div>
                : null}
            </div>
        </article>
    )
}