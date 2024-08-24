import "./offer_5.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer5EntryData } from "../data/SubpageContent/offer_5/entryData/offer5EntryData.js";
//
import Specialists from '../componentSets/specialists/specialists';
import ContactForm from "../components/form/form.js";




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
          
        </div>
      </article>
      <Specialists/>
      <ContactForm/>
    </>
  );
}
