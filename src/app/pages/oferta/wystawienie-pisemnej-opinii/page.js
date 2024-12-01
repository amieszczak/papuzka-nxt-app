import styles from './page.module.css';
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer5EntryData } from "../../../data/SubpageContent/offer_5/entryData/offer5EntryData.js";
//
import ContactForm from "../../../components/form/form.js";
import SpecialistShowcase from "../../../componentSets/specialistShowcase/specialistShowcase";




export default function Offer_5() {
  return (
    <>
      <article>
        <div className={styles.container}>
          <OfferPageEntry
            pageTitle={Offer5EntryData.pageTitle}
            entryInformation={Offer5EntryData.entryInformation}
            photoSrc={Offer5EntryData.photoSrc}
          />
          
        </div>
      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}
