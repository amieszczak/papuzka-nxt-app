'use client';
import styles from './landingPageTeam.module.css';
//
import { landingPageTeamData } from '@/app/data/landingPageData/landingPageTeamData/landingPageTeamData.js';
//
import { Swiper, SwiperSlide} from "swiper/react"; /* , useSwiper  */
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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

    /* function SlidePrevButton() {
        const swiper = useSwiper();
    } */

    return(
        <div className={styles.container}>
            <h2 className={styles.slogan}>Mamy bogate <span>doświadczenie <span className={styles.noWrap}>i kompetencje.</span> </span>Poznaj nasz <span>zespół</span></h2>
            <div className={styles.descriptionContainer}>
                {landingPageTeamData.map(item => {
                    return(
                        <>
                            <h3 className={classNames({[styles.name]: true, [styles.nameDisplay]: item.id == activeId})}>{item.name}</h3>
                            <p className={classNames({[styles.description]: true, [styles.activeDescription]: item.id == activeId})}>{item.description}</p>
                        </>
                    )
                })}
            </div>
            <div className={styles.photoContainer }>
                
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    }}
                    /* navigation = {{
                        prevEl: `${styles.prev}`,
                        nextEl: `${styles.next}`,
                    }} */
                    pagination={{
                    clickable: true,
                    el: `.${styles.teamPaginationContainer}`,      
                    bulletClass: 'swiper-pagination-bullet-team',
                    bulletActiveClass: 'swiper-pagination-bullet-team-active', 
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
            <div className={styles.teamCoordinatesContainer}>
                <div className={styles.teamPaginationContainer}>
                </div>
                <div className={styles.next}></div>
                    <div className={styles.prev}></div>
            </div>
            <div className={styles.bottomLine}></div>
        </div> 
    )
}