import "./offer_5.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer5EntryData } from "../data/SubpageContent/offer_5/entryData/offer5EntryData.js";




export default function Offer_5() {
  return (
    <>
      <article>
        <div>
          <OfferPageEntry
            pageTitle={Offer5EntryData.pageTitle}
            entryInformation={Offer5EntryData.entryInformation}
            photoSrc={Offer5EntryData.photoSrc}
          />
          
          <section className="east">
            <div className="page-o1-photo">
              <img
                className="category-photo"
                src="img/03_page_o1/Rectangle 21.png"
              />
              <div className="book-button">REZERWUJ</div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
