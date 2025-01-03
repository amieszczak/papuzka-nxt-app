import styles from "./page.module.css";
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { terapiaLogopedycznaEntryData } from "@/app/data/SubpageContent/terapiaLogopedyczna/entryData/terapiaLogopedycznaEntryData";
//
import MetricUnit from "../../../components/metricUnit/metricUnit.js";
import { terapiaLogopedycznaMetricData } from "@/app/data/SubpageContent/terapiaLogopedyczna/metricData/terapiaLogopedycznaMetricData";
//
import ListTemplate from "../../../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { terapiaLogopedycznaListData } from "@/app/data/SubpageContent/terapiaLogopedyczna/listData/terapiaLogopedycznaListData";
//
import classNames from "classnames";
//
import ContactForm from "../../../components/form/form.js";
//
import SpecialistShowcase from '../../../componentSets/specialistShowcase/specialistShowcase.js';

export default function TerapiaLogopedyczna() {
  return (
    <>
      <OfferPageEntry
        pageTitle={terapiaLogopedycznaEntryData.pageTitle}
        entryInformation={terapiaLogopedycznaEntryData.entryInformation}
        photoSrc={terapiaLogopedycznaEntryData.photoSrc}
      />
      <article>
        <div className={styles.container}>
          <section className={classNames(styles.halfDivider, styles.listDivider)}>
            {terapiaLogopedycznaListData.map((item) => {
              return <ListTemplate key={item.id} title={item.title} list={item.list} />;
            })}
          </section>
          <section className={styles.halfDivider}>
            <aside className={styles.aside}>
              {terapiaLogopedycznaMetricData.map((item) => {
                return (
                  <MetricUnit
                    key={item.id}
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