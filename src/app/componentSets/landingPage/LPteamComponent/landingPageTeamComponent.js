'use client';
import styles from './landingPageTeam.module.css';
//
import { landingPageTeamData } from '@/app/data/landingPageData/landingPageTeamData/landingPageTeamData.js';
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//
import Image from 'next/image';
//
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
//
import { useState } from "react";
//
import classNames from 'classnames';

export default function LandingPageTeamComponent() {

    const [activeId, setActiveId] = useState(1);

    return(
        <div className={styles.container}>
            {landingPageTeamData.map(item => {
                return(
                    <h2 className={classNames({[styles.name]: true, [styles.nameDisplay]: item.id == activeId})}>{item.name}</h2>
                )
            })}
            <div className={styles.descriptionContainer}>
                {landingPageTeamData.map(item => {
                    return(
                        <p className={classNames({[styles.description]: true, [styles.activeDescription]: item.id == activeId})}>{item.description}</p>
                    )
                })}
            </div>
            <div className={styles.photoContainer }>
                
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    }}
                    pagination={{
                    clickable: true,
                    el: `.${styles.paginationContainer}`,      
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active', 
                    }}

                    onActiveIndexChange={(swiper) => setActiveId(swiper.realIndex + 1)}
                >
                    {landingPageTeamData.map(item => {
                        return(
                            <SwiperSlide key={item.id}>
                                <Image
                                src={item.photoSrc}
                                className={styles.photo}
                                width={1000}
                                height={737}
                                alt={item.alt}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div> 
    )
}