'use client';
import styles from "./specialists.module.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
import Carousel from "./photoCarousel/carousel.js";
import Calendar from "../../components/calendar/calendar.js";
/* import FreeConsultationsButton from "../../components/freeConsultationsButton/freeConsultationsButton.js"; */
/* import Diary from "../../components/diary/diary.js"; */
import { useState } from 'react';




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

            <Carousel onSpecialists = {selectSpecialists} />
            

            <div className={styles.submitSection}>
                <TherapistInfo currentSpecialist={ currentSpecialist }/>      
                <div className={styles.dateSection}>
                    <div className={styles.calendarSubmit}>
                        <Calendar />
                        {/* <FreeConsultationsButton /> */}
                    </div>
                   {/*  <Diary /> */}                
                </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
