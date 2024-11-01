'use client';
import styles from "./specialists.module.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
import Carousel from "./photoCarousel/carousel.js";
import Calendar from "../../components/calendar/calendar.js";
import { useState } from 'react';
import Link from "next/link";

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
                <Link href="#" className={styles.link}>Zapisz się na bezpłatne konsultacje</Link>   
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
