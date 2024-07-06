'use client';
import styles from "./specialists.module.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
import Carousel from "./photoCarousel/carousel.js";
/* import Calendar from "../../components/calendar/calendar.js"; */
import FreeConsultationsButton from "../../components/freeConsultationsButton/freeConsultationsButton.js";
import Diary from "../../components/diary/diary.js";




export default function Specialists() {
  
  const selectSpecialists = (id) => {
    console.log(id);
    const specialists = document.querySelectorAll('.therapist-info_specialist__q55nM');
    console.log(specialists[id]);
    for(let i=0; i < specialists.length; i++) {
      specialists[i].classList.remove('therapist-info_active__qaufs');
    }
    specialists[id].classList.add('therapist-info_active__qaufs');

  }

  const displaySpecialists = (id) => {
    /* console.log(id); */
    /* if */
  }

  ///here function joining 2 imported modules

  return (
    <>
      <article>
        <div className={styles['page-o2']}>
          <section>
            <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>

            <Carousel onSpecialists = {selectSpecialists} />
            

            <div className="submit-section">
                <TherapistInfo onInfo={displaySpecialists}/>
                <div className="date-section">
                    <div className="calendar-submit">
                        {/* <Calendar /> */}
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
