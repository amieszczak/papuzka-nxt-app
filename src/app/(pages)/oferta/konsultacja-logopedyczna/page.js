import styles from './page.module.css';
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { konsultacjaLogopedycznaEntryData } from '@/app/data/SubpageContent/konsultacjaLogopedyczna/entryData/konsultacjaLogopedycznaEntryData';
import ListTemplate from "../../../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { konsultacjaLogopedycznaListData } from '@/app/data/SubpageContent/konsultacjaLogopedyczna/ListData/konsultacjaLogopedycznaListData';
import ParagraphUnit from "../../../componentSets/PageTemplate/ParagraphUnit/ParagraphUnit.js";
import { konsultacjaLogopedycznaParagraphData } from '@/app/data/SubpageContent/konsultacjaLogopedyczna/ParagraphData/konsultacjaLogopedycznaParagraphData';
//
import ContactForm from "../../../components/form/form.js";
//
import SpecialistShowcase from '../../../componentSets/specialistShowcase/specialistShowcase.js';


export default function KonsultacjaLogopedyczna() {
  
  return (
    <>
      <article>
        <OfferPageEntry
          pageTitle={konsultacjaLogopedycznaEntryData.pageTitle}
          entryInformation={konsultacjaLogopedycznaEntryData.entryInformation}
          photoSrc={konsultacjaLogopedycznaEntryData.photoSrc}
        />

        <div className={styles.infoContainer}>  
          
          <ListTemplate
            title={konsultacjaLogopedycznaListData.title}
            list={konsultacjaLogopedycznaListData.list}
          />

          <ParagraphUnit 
            title={konsultacjaLogopedycznaParagraphData.title}
            paragraph={konsultacjaLogopedycznaParagraphData.paragraph}
          />
         
        </div>
      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}