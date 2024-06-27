import "./offer_3.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer3EntryData } from "../data/SubpageContent/offer_3/entryData/offer3EntryData.js";



export default function Offer_3() {
  return (
    <>

      
      <article>
        
            <OfferPageEntry
              pageTitle={Offer3EntryData.pageTitle}
              entryInformation={Offer3EntryData.entryInformation}
              photoSrc={Offer3EntryData.photoSrc}
            />
            <div>
              <section>
                <div>

              <h2>Dla kogo?</h2>

              <p>
                Zajęcia TUS przeznaczone są dla wszystkich uczniów, którzy
                prezentują szeroko rozumiane trudności w funkcjonowaniu
                społecznym. Trening Umiejętności Społecznych jest pomocny w
                terapii dzieci i młodzieży z autyzmem, zespołem Aspergera,
                zaburzeniami zachowania, ADHD, Zespołem Downa, Zespołem
                Williamsa. Zajęcia mogą być również skierowane do dzieci
                nieśmiałych, wycofanych oraz prezentujących zaburzenia lękowe.
              </p>
              <ul>
                <li>
                  <h3>TUS dla dzieci z autyzmem i zespołem Aspergera</h3>
                  to zajęcia koncentrujące się na wspieraniu rozwoju kompetencji
                  społecznych, emocjonalnych i komunikacyjnych dostosowane do
                  potrzeb i możliwości uczestników.
                </li>
                <li>
                  <h3>TUS dla dzieci z ADHD</h3>
                  to w dużej mierze praca nad regulacją procesu pobudzenia i
                  hamowania, tak aby uczeń z wyzwaniem rozwojowym funkcjonował w
                  grupie z większą uwagą. Podczas zajęć pracuje się nad
                  minimalizacją kosztów jakie ponosi osoba z ADHD w kontaktach
                  społecznych w związku z deficytami uwagi i nadmierną
                  ruchliwością w obrębie ciała.
                </li>
                <li>
                  <h3>TUS dla dzieci nieśmiałych</h3>
                  to głównie praca nad procesem grupowym, aby stworzyć
                  przestrzeń do otwarcia się nieśmiałej osoby na kontakty z
                  grupą. Praca z wycofaną osobą często rozpoczyna się od pracy w
                  diadzie (tylko dwoje dzieci), tak aby oswajanie się w byciu w
                  kontakcie odbywało się w jak najbardziej komfortowych i
                  bezpiecznych dla dziecka warunkach.
                </li>
              </ul>
            </div>
          </section>

          <section className="east">
            

            <aside>
              <div className="metric">
                <div className="metric-icon">
                  <img src="img/aside/offer_3/u_calendar-alt.svg" />
                </div>

                <div className="metric-info">
                  <h2>PLAN</h2>

                  <p>12 cotygodniowych spotkań około 60 minut raz w tygodniu</p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="home"
                    src="img/aside/offer_3/u_home-alt.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>DZIAŁANIA WŁASNE</h2>

                  <p>plan zakłada ćwiczenia utrwalające do wykonania w domu</p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="phone"
                    src="img/aside/offer_3/u_phone-alt.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>KONTAKT</h2>

                  <p>
                    kontakt z trenerem i wsparcie w trakcie trwania treningu
                  </p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="chat"
                    src="img/aside/offer_3/u_chat-info.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>KONSULTACJE</h2>

                  <p>
                    konsultacja z rodzicem po zakończeniu treningu- do 30 minut
                  </p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="award"
                    src="img/aside/offer_3/award-alt.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>PODSUMOWANIE</h2>

                  <p>
                    dyplom ukończenia treningu i opis funkcjonowania dziecka
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </div>

        <div className="page-o1-1">
          <section>
            <h1>Cele treningu</h1>
            <ul>
              <li>
                Rozpoznawanie emocji swoich i innych w poszczególnych sytuacjach
              </li>
              <li>Zrozumienie pojęcia „złość” i jej wyrażania</li>
              <li>Uświadomienie istnienia granic między ludźmi</li>
              <li>Nauka stawiania swoich granic i szanowanie granic innych</li>
              <li>
                Poznanie sposobów reagowania na zaczepki i agresję innych wobec
                nas
              </li>
              <li>Poznanie znaczenia słowa „asertywność”</li>
              <li>Rozróżnianie zachowań agresywnych, asertywnych i uległych</li>
              <li>
                Nauka rozpoznawania sytuacji, w której powinniśmy prosić o pomoc
              </li>
              <li>Zrozumienie pojęcia krytyka oraz informacja zwrotna</li>
              <li>Kształtowanie umiejętności współpracy w grupie</li>
              <li>Komplementowanie innych oraz reagowanie na komplementy</li>
              <li>Rozpoczynanie rozmowy z innymi ludźmi</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
