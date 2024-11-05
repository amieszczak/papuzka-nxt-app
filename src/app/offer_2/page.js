import styles from "./offer2.module.css";
import OfferPageEntry from "../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { Offer2EntryData } from "../data/SubpageContent/offer_2/entryData/offer2EntryData.js";
//
import MetricUnit from "../components/metricUnit/metricUnit.js";
import { metricData } from "../data/SubpageContent/offer_2/metricData/metricData.js";
//
import ListTemplate from "../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { Offer2ListData } from "../data/SubpageContent/offer_2/listData/offer2ListData.js";
//
import classNames from "classnames";
//
import ContactForm from "../components/form/form.js";
//
import SpecialistShowcase from '../componentSets/specialistShowcase/specialistShowcase.js';

export default function Offer_2() {
  return (
    <>
      <OfferPageEntry
        pageTitle={Offer2EntryData.pageTitle}
        entryInformation={Offer2EntryData.entryInformation}
        photoSrc={Offer2EntryData.photoSrc}
      />
      <article>
        <div className={styles.container}>
          <section className={classNames(styles.halfDivider, styles.listDivider)}>
            {Offer2ListData.map((item) => {
              return <ListTemplate title={item.title} list={item.list} />;
            })}
          </section>
          <section className={styles.halfDivider}>
            <aside className={styles.aside}>
              {metricData.map((item) => {
                return (
                  <MetricUnit
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
      </article>
      <SpecialistShowcase/>
      <ContactForm/>

    </>
  );
}
