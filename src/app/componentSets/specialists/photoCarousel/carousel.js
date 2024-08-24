"use client";
import styles from "./carousel.module.css";
import Image from "next/image";
import { carouselPhotos } from "@/app/data/SpecialistsData/carouselPhotos.js";
import carouselMovement from "./functions/carouselFunctions.js";

export default function Carousel({ onSpecialists }) {
  const SelectSpecialist = (id) => {
    onSpecialists(id);
  };

  return (
    <div className={styles.carouselContainer}> 
      <div className={styles.therapistCarousel}>  
        <div className={styles.carouselTrack}> 
          {carouselPhotos.map((item) => {
            return (
              <div key={item.id} onClick={() => onSpecialists(item.id)} className={styles.therapistPhotoContainer}>  
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className={styles.therapistPhoto}  
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

