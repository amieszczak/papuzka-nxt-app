import styles from "./page.module.css";
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer3EntryData } from "../../../data/SubpageContent/offer_3/entryData/offer3EntryData.js";
//
import ListTitleTemplate from "../../../componentSets/PageTemplate/ListTitleTemplate/ListTitleTemplate.js";
import { listTitleData } from "../../../data/SubpageContent/offer_3/listTitleData/offer3listTitleData.js";
//
import MetricUnit from "../../../components/metricUnit/metricUnit.js";
import { offer3MetricData } from "../../../data/SubpageContent/offer_3/metricData/offer3MetricData";
//
import ListTemplate from "../../../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { offer3ListData } from "../../../data/SubpageContent/offer_3/listData/offer3ListData.js";
//
import ContactForm from "../../../components/form/form.js";
//
import SpecialistShowcase from "../../../componentSets/specialistShowcase/specialistShowcase";

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
            <aside>
              {offer3MetricData.map((item) => {
                return (
                  <MetricUnit
                    key={item.div}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </aside>
            
          </section>
        </div>

        <div className={styles.singleList}>
          <section>
            {offer3ListData.map(item => {
              return(
                <ListTemplate key={item.id} title={item.title} list={item.list}/>
              )
            })}
          </section>
        </div>

      </article>
      <SpecialistShowcase/>
      <ContactForm/>
    </>
  );
}