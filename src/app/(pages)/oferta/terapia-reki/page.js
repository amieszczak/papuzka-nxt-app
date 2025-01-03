import styles from "./page.module.css";
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { terapiaRekiEntryData } from "@/app/data/SubpageContent/terapiaReki/entryData/terapiaRekiEntryData";
//
import ParagraphUnit from "../../../componentSets/PageTemplate/ParagraphUnit/ParagraphUnit.js";
import { terapiaRekiParagraphData } from "@/app/data/SubpageContent/terapiaReki/paragraphData/terapiaRekiParagraphData";
//
import ListTemplate from "../../../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { terapiaRekiListData } from "@/app/data/SubpageContent/terapiaReki/listData/terapiaRekiListData";
//
import ContactForm from "../../../components/form/form.js";
//
import SpecialistShowcase from "../../../componentSets/specialistShowcase/specialistShowcase";

export default function TerapiaReki() {
  return (
    <>
      <article>
        <section>
          <OfferPageEntry
            pageTitle={terapiaRekiEntryData.pageTitle}
            entryInformation={terapiaRekiEntryData.entryInformation}
            photoSrc={terapiaRekiEntryData.photoSrc}
          />
        </section>

        <section>
          <div className={styles.listsUnit}>
            <ParagraphUnit
              title={terapiaRekiParagraphData.title}
              paragraph={terapiaRekiParagraphData.paragraph}
            />

            {terapiaRekiListData.map((item) => {
              return <ListTemplate key={item.id} title={item.title} list={item.list} />;
            })}
          </div>
        </section>
      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}
