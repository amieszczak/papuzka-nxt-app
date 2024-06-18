import './specialists.css';
import TherapistInfo from './therapistInfo/therapistInfo.js';
import Carousel from './photoCarousel/carousel.js';
import Calendar from './calendar/calendar.js';
import FreeConsultationsButton from './freeConsultationsButton/freeConsultationsButton.js';
import Diary from './diary/diary.js';

export default function Specialists() {
    return (
        <>
            <article>
                <div className="page-o2">
                    <section>
                    <h1>SPRAWDŹ DOSTĘPNOŚĆ NASZYCH SPECJALISTÓW</h1>

                    <Carousel/>
                    <TherapistInfo/>
                    
                    <div className="submit-section">
                        <div className="hor">
                            <Calendar/>

                        <div>
                           <FreeConsultationsButton/>
                        </div>
                        </div>
                            <Diary/>

                    </div>
                    </section>
                </div>
                </article>
        </>
    )
}