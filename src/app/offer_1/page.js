import styles from './offer1.module.css';
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer1EntryData } from "../data/SubpageContent/offer_1/entryData/offer1EntryData.js";
import ListTemplate from "../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { Offer1ListData } from "../data/SubpageContent/offer_1/ListData/Offer1ListData.js";
import ParagraphUnit from "../componentSets/PageTemplate/ParagraphUnit/ParagraphUnit.js";
import { ParagraphData } from "../data/SubpageContent/offer_1/ParagraphData/ParagraphData.js";
//
import ContactForm from "../components/form/form.js";
//
import SpecialistShowcase from '../componentSets/specialistShowcase/specialistShowcase.js';


export default function Offer_1() {
  
  return (
    <>
      <article>
        <OfferPageEntry
          pageTitle={Offer1EntryData.pageTitle}
          entryInformation={Offer1EntryData.entryInformation}
          photoSrc={Offer1EntryData.photoSrc}
        />

        <div className={styles.infoContainer}>  
          
          <ListTemplate
            title={Offer1ListData.title}
            list={Offer1ListData.list}
          />

          <ParagraphUnit 
            title={ParagraphData.title}
            paragraph={ParagraphData.paragraph}
          />
         
        </div>
      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}