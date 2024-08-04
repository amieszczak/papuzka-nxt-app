/* import "./offer_4.css"; */
import styles from "./offer4.module.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer4EntryData } from "../data/SubpageContent/offer_4/entryData/offer4EntryData.js";
//
import ParagraphUnit from "../componentSets/PageTemplate/ParagraphUnit/ParagraphUnit.js";
import { offer4ParagraphData } from "../data/SubpageContent/offer_4/paragraphData/offer4ParagraphData.js";
//
import ListTemplate from "../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { offer4ListData } from "../data/SubpageContent/offer_4/listData/offer4ListData.js";

export default function Offer_4() {
  return (
    <>
      <article>
        <section>
          <OfferPageEntry
            pageTitle={Offer4EntryData.pageTitle}
            entryInformation={Offer4EntryData.entryInformation}
            photoSrc={Offer4EntryData.photoSrc}
          />
        </section>

        <section>
          <div className={styles.listsUnit}>
            <ParagraphUnit
              title={offer4ParagraphData.title}
              paragraph={offer4ParagraphData.paragraph}
            />

            {offer4ListData.map((item) => {
              return <ListTemplate title={item.title} list={item.list} />;
            })}
          </div>
        </section>
      </article>
    </>
  );
}
