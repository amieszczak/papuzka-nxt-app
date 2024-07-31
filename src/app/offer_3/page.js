import styles from "./offer3.module.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer3EntryData } from "../data/SubpageContent/offer_3/entryData/offer3EntryData.js";
//
import ListTitleTemplate from "../componentSets/PageTemplate/ListTitleTemplate/ListTitleTemplate.js";
import { listTitleData } from "../data/SubpageContent/offer_3/listTitleData/offer3listTitleData.js";
//
import MetricUnit from "../components/metricUnit/metricUnit.js";
import { offer3MetricData } from "../data/SubpageContent/offer_3/metricData/offer3MetricData";

export default function Offer_3() {
  return (
    <>
      <article>
        <OfferPageEntry
          pageTitle={Offer3EntryData.pageTitle}
          entryInformation={Offer3EntryData.entryInformation}
          photoSrc={Offer3EntryData.photoSrc}
        />
        <div className={styles.descriptionContainer}>
          <section className={styles.halfDivider}>
            <ListTitleTemplate
              mainTitle={listTitleData.title}
              mainDescription={listTitleData.description}
              list={listTitleData.list}
            />
          </section>

          <section className={styles.halfDivider}>
            {offer3MetricData.map((item) => {
              return (
                <MetricUnit
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                />
              );
            })}

            {/* <aside>
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
            </aside> */}
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
