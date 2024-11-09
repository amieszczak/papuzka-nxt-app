"use client";
import styles from "./landingPageOffer.module.css";
import LandingPageMarkup from "@/app/components/landingPageMarkup/landingPageMarkup.js";
//
import { landingPageOfferData } from "@/app/data/landingPageData/landingPageOfferData/landingPageOfferData.js";
import Image from "next/image";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//
import { useState } from "react";
//
import classNames from "classnames";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/autoplay";
import "swiper/css/pagination";
//
import Link from "next/link";
//
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


export default function LandingPageOfferComponent() {

  useEffect(() => {
    Aos.init();
  }, [])

  //offerDataDisplay
  const [offerId, setOfferId] = useState(1);

  //buttonHoverState
  const [buttonHoverState, setButtonHoverState] = useState(false);

  function changeOfferId(id) {
    setOfferId(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainerGap}>
        <h2 id="offerHeader" className={styles.h2} data-aos='fade-right'>
          Rozwój mowy to nasza <span>specjalność.</span>Poznaj{" "}
          <span>ofertę</span> papużki
        </h2>
      </div>
      <div className={styles.contentContainer} data-aos='fade-right'>
        <LandingPageMarkup category="oferta"/>
        <div className={styles.descriptionsContainer}>
          {landingPageOfferData.map((item) => {
            return (
              <p
                key={item.id}
                className={classNames({
                  [styles.description]: true,
                  [styles.activeDescription]: item.id === offerId,
                })}
              >
                {item.desctiption}
              </p>
            );
          })}
        </div>
        <div className={styles.photoSection} data-aos='fade-up'>
          <div className={styles.categoryTitle}>
            {landingPageOfferData.map((item) => {
              return (
                <h2
                  key={item.id}
                  className={classNames({
                    [styles.title]: true,
                    [styles.titleDisplay]: item.id === offerId,
                  })}
                >
                  {item.title}
                </h2>
              );
            })}
          </div>
          <div className={styles.photoContainer}>
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
             /*  autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }} */
              pagination={{
                clickable: true,
                el: `.${styles.paginationContainer}`,      
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active', 
              }}

              onActiveIndexChange={(swiper) => setOfferId(swiper.realIndex + 1)}
            >
              {landingPageOfferData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.photoSrc}
                      className={styles.photo}
                      width={1000}
                      height={737}
                      alt={item.alt}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={styles.topBlinder}></div>
            <div className={styles.leftBlinder}></div>
          </div>
          <div 
          onMouseEnter={() => setButtonHoverState(true)}
          onMouseLeave={() => setButtonHoverState(false)}
          className={classNames({[styles.offerLink]:true, [styles.offerLinkHover]: buttonHoverState === true})}
          >

            <Link href={landingPageOfferData.find(item => offerId === item.id).refference}>Dowiedz się więcej</Link> 

           <span className={classNames({[styles.buttonGradient]: true, [styles.buttonGradientLeft]: true, [styles.buttonGradientActive]: buttonHoverState === true})}></span>
           <span className={classNames({[styles.buttonGradient]:true, [styles.buttonGradientRight]: true, [styles.buttonGradientActive]: buttonHoverState === true})}></span>
          </div>
          <div className={styles.paginationContainer}></div>
        </div>
      </div>
    </div>
  );
}