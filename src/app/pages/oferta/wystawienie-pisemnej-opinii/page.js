import styles from './page.module.css';
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
/* import { Offer5EntryData } from "../../../data/SubpageContent/offer_5/entryData/offer5EntryData.js"; */
import { wystawieniePisemnejOpiniiEntryData } from '@/app/data/SubpageContent/wystawieniePisemnejOpinii/entryData/wystawieniePisemnejOpiniiEntryData';

//
import ContactForm from "../../../components/form/form.js";
import SpecialistShowcase from "../../../componentSets/specialistShowcase/specialistShowcase";

export default function WystawieniePisemnejOpinii() {
  return (
    <>
      <article>
        <div className={styles.container}>
          <OfferPageEntry
            pageTitle={wystawieniePisemnejOpiniiEntryData.pageTitle}
            entryInformation={wystawieniePisemnejOpiniiEntryData.entryInformation}
            photoSrc={wystawieniePisemnejOpiniiEntryData.photoSrc}
          />
          
        </div>
      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}
