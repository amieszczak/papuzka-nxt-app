'use client';
import styles from "./specialists.module.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
import Carousel from "./photoCarousel/carousel.js";
import Calendar from "../../components/calendar/calendar.js";
import FreeConsultationsButton from "../../components/freeConsultationsButton/freeConsultationsButton.js";
import Diary from "../../components/diary/diary.js";
import { useState } from 'react';




export default function Specialists() {

  const [currentSpecialist, setCurrentSpecialist] = useState('specialist-Izabela');
  
  const selectSpecialists = (id) => {
    /* console.log(id); */

    setCurrentSpecialist(id) 
/* 
    const specialists = document.querySelectorAll(`[data-id="${id}"]`);
    
    for(let i=0; i < specialists.length; i++) {
      specialists[i].classList.remove('therapist-info_active__qaufs');
    }
    specialists[id].classList.add('therapist-info_active__qaufs'); */
  }

  return (
    <>
      <article>
        <div className={styles['page-o2']}>
          <section>
            <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>

            <Carousel onSpecialists = {selectSpecialists} />
            

            <div className={styles['submit-section']}>
                <TherapistInfo currentSpecialist={ currentSpecialist }/>      
                <div className={styles['date-section']}>
                    <div className={styles['calendar-submit']}>
                        <Calendar />
                        <FreeConsultationsButton />
                    </div>
                    <Diary />                
                </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
