import './offer_2.css';
import Template_1 from "../component sets/PageTemplate/template_1/template_1.js";
import { Offer2Template1Data } from '../data/SubpageContent/offer_2/template_1/offer_2_template_1_content.js';

export default function Offer_2() {
  return (
    <>
    <Template_1 pageTitle={Offer2Template1Data.pageTitle} entryInformation={Offer2Template1Data.entryInformation} photoSrc={Offer2Template1Data.photoSrc}/>
      <article>
        <div className="page_o1">
          <section className="west">
            <div className="middle-page-text">
              <h1>TERAPIA LOGOPEDYCZNA</h1>

              <p>
                Terapia logopedyczna to zespół działań podejmowanych przez
                logopedów, dla których nadrzędnym zadaniem jest osiągnięcie
                zamierzonych celów logopedycznych. Czas terapii logopedycznej
                jest uzależniony od typu trudności oraz indywidualnej motywacji
                pacjenta. Pracujemy w oparciu o metody niedyrektywne, w zabawie
                i w relacji, z uwzględnieniem indywidualnych potrzeb każdej
                osoby. Terapia logopedyczna prowadzona jest z wykorzystaniem
                terapii miofunkcjonalnej. Logopeda/ neurologopeda prowadzi
                terapię holistycznie, ćwiczymy połykanie, pozycję spoczynkową
                języka oraz wykonujemy ćwiczenia normalizujące napięcie
                mięśniowe.
              </p>

              <h2>Wskazania:</h2>

              <ul>
                <li>autyzm</li>
                <li>mózgowe porażenie dziecięce</li>
                <li>rozszczep wargi i podniebienia</li>
                <li>jąkanie</li>
                <li>niedosłuch</li>
                <li>niepełnosprawność złożona</li>
                <li>wady wymowy</li>
                <li>opóźniony rozwój mowy</li>
                <li>zespół Downa</li>
                <li>dysleksja, dysgrafia, dyskalkulia</li>
              </ul>

              <h2>Cele terapii:</h2>

              <ul>
                <li>usprawnienie motoryki narządów mowy</li>
                <li>korygowanie wad wymowy</li>
                <li>
                  poprawienie jakości funkcji językowej, oddechowej, fonacyjnej
                </li>
                <li>rozbudowanie zasobu słownictwa czynnego i biernego</li>
                <li>wypracowanie alternatywnych zachowań komunikacyjnych</li>
              </ul>
            </div>
          </section>

          <section className="east">
            <div className="page-o1-photo">
              <img
                className="category-photo"
                src="img/03_page_o1/Rectangle 21.png"
              />
              <div className="book-button">REZERWUJ</div>
            </div>
            <aside>
              <div className="metric">
                <div className="metric-icon">
                  <img src="img/aside/oferta_terapia/u_clock-five.svg" />
                </div>

                <div className="metric-info">
                  <h2>CZAS TRWANIA</h2>

                  <p>90 MINUT</p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="tele"
                    src="img/aside/oferta_terapia/u_telegram-alt.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>KONTAKT</h2>

                  <p>
                    W OKRESIE PRZEPROWADZANIA TERAPII JESTEŚMY W KONTAKCIE Z
                    RODZICEM
                  </p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="voll"
                    src="img/aside/oferta_terapia/u_volleyball.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>NAUKA PRZEZ ZABAWĘ</h2>

                  <p>
                    NASZE ZAJĘCIA W ODRÓŻNIENIU OD WIELU TEGO TYPU PROGRAMÓW
                    UCZĄ PRZY JEDNOCZEŚNIE MILE SPĘDZONYM PRZEZ DZIECKO CZASIE
                  </p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="fire"
                    src="img/aside/oferta_terapia/u_fire.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>SZYBKA INTERWENCJA</h2>

                  <p>
                    W PRZYPADKU PROBLEMÓW WYMAGAJĄCYCH SZYBKIEJ INTERWENCJI,
                    SŁUŻYMY POMOCĄ.
                  </p>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon">
                  <img
                    className="eye"
                    src="img/aside/oferta_terapia/u_eye.svg"
                  />
                </div>

                <div className="metric-info">
                  <h2>WSPÓLNE WIZYTY</h2>

                  <p>
                    JEŚLI ZACHODZI POTRZEBA UCZESTNICTWA RODZICA W ZAJĘCIACH,
                    ZAPRASZAMY DO WSPÓLNEJ WIZYTY.
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </article>
    </>
  );
}
