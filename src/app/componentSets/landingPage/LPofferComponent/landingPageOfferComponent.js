'use client';
import styles from "./landingPageOffer.module.css";
import LandingPageMarkup from "@/app/components/landingPageMarkup/landingPageMarkup.js";
//
import { landingPageOfferData } from "@/app/data/landingPageData/landingPageOfferData/landingPageOfferData.js";
import Image from "next/image";
//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

import 'swiper/css/autoplay';



export default function LandingPageOfferComponent() {


  return (
    <div className={styles.container}>
      <div className={styles.titleContainerGap}>
        <h2 className={styles.h2}>
          Rozwój mowy to nasza <span>specjalność.</span>Poznaj{" "}
          <span>ofertę</span> papużki
        </h2>
      </div>
      <div className={styles.contentContainer}>
        <LandingPageMarkup category="oferta" />
        <div className={styles.descriptionsContainer}>
          
            {landingPageOfferData.map(item => {
              return(
                <p className={styles.description}>{item.desctiption}</p>
              )
            })}
          
        </div>
        <div className={styles.photoSection}>
            <div className={styles.categoryTitle}>Terapia Logopedyczna</div>
            <div className={styles.photoContainer}>
              <Swiper>
                {landingPageOfferData.map(item => {
                    return(
                      <SwiperSlide
                      autoplay={{
                        "delay": 25,
                        "disableOnInteraction": false
                      }} 
                      >
                        <Image src={item.photoSrc} className={styles.photo} width={1000} height={737}/>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
              <div className={styles.topBlinder}></div>
              <div className={styles.leftBlinder}></div>
            </div>
        </div>
      </div>
    </div>
  );
}