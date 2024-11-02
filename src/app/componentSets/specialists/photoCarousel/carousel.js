"use client";
import styles from "./carousel.module.css";
import Image from "next/image";
import { carouselPhotos } from "@/app/data/SpecialistsData/carouselPhotos.js";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//
import { useState } from "react";
//
import { useEffect } from "react";
//
import classNames from "classnames";


export default function Carousel({onSpecialists}) {

  const [activeIndex, setActiveIndex] = useState(1);

  const selectSpecialist = (id) => {
    onSpecialists(id);
  }

  return (
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
            onActiveIndexChange={(swiper) => {
              setActiveIndex(activeIndex === swiper.realIndex)
            }}
          >
          {carouselPhotos.map((item) => {
            return (
              <SwiperSlide key={item.id} onClick={() => onSpecialists(item.id)} className={styles.therapistPhotoContainer}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className={classNames({[styles.therapistPhoto]:true, [styles.therapistActive]: item.id === activeIndex})}  
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}