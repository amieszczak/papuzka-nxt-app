import "./specialists.css";
import TherapistInfo from "./therapistInfo/therapistInfo.js";
import Carousel from "./photoCarousel/carousel.js";
import Calendar from "./calendar/calendar.js";
import FreeConsultationsButton from "./freeConsultationsButton/freeConsultationsButton.js";
import Diary from "./diary/diary.js";

export default function Specialists() {
  return (
    <>
      <article>
        <div className="page-o2">
          <section>
            <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>

            <Carousel />
            

            <div className="submit-section">
                <TherapistInfo />
                <div className="date-section">
                    <div className="calendar-submit">
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
