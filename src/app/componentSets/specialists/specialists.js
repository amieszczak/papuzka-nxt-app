'use client';
import styles from "./specialists.module.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
/* import Carousel from "./photoCarousel/carousel.js"; */
import { carouselPho2tos } from "@/app/data/SpecialistsData/carouselPhotos.js";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
//
import { useState } from 'react';
import Link from "next/link";
//
import classNames from "classnames";
//
import Image from "next/image";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";


export default function Specialists() {

  const [currentSpecialist, setCurrentSpecialist] = useState('specialist-Magdalena');
  
  const selectSpecialists = (id) => {
    setCurrentSpecialist(id) 
  }

  return (
    <>
      <article>
        <div className={styles.content}>
          <section>
            <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>
            {/* ////////////////////////////////////////////////////// */}
            <div className={styles.carouselContainer}>
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
           /*  onActiveIndexChange={(swiper) => {
              setActiveIndex(activeIndex === swiper.realIndex)
            }} */
          >
            {carouselPhotos.map((item) => {
            return (
              <SwiperSlide key={item.id} onClick={() => onSpecialists(item.id)} className={styles.therapistPhotoContainer}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className={classNames({[styles.therapistPhoto]:true})}  
                />
              </SwiperSlide>
            );
          })}
          </Swiper>
            </div>
            {/* ////////////////////////////////////////////////////// */}

            <div className={styles.submitSection}>
              
                <div className={styles.specInfo}>
                  {SpecialistsData.map(person => {
                    
                    return (
                        <div data-id={person.id} key={person.id} className={classNames({
                            [styles.specialist]: true,
                            /* [styles.active]: person.id === currentSpecialist    */            
                        })} > 
                            <h2>{person.name}</h2>
                            <p>{person.description}</p>
                        </div>
                    )
                  })}
                </div>
                <Link href="#" className={styles.link}>Zapisz się na bezpłatne konsultacje</Link>   
            </div>
          </section>
        </div>
      </article>
    </>
  );
}


/* return (
  <>
    <article>
      <div className={styles.content}>
        <section>
          <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>
          <Carousel onSpecialists = {selectSpecialists} />
          <div className={styles.submitSection}>
              <TherapistInfo currentSpecialist={ currentSpecialist }/>   
              <Link href="#" className={styles.link}>Zapisz się na bezpłatne konsultacje</Link>   
          </div>
        </section>
      </div>
    </article>
  </>
); */
