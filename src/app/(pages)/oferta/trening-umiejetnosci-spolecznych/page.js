import styles from "./page.module.css";
import OfferPageEntry from "../../../componentSets/PageTemplate/OfferPageEntry/OfferPageEntry.js";
import { treningUmiejetnosciSpolecznychEntryData } from "@/app/data/SubpageContent/treningUmiejetnosciSpolecznych/entryData/treningUmiejetnosciSpolecznychEntryData";
//
import ListTitleTemplate from "../../../componentSets/PageTemplate/ListTitleTemplate/ListTitleTemplate.js";
import { treningUmiejetnosciSpolecznychListTitleData } from "@/app/data/SubpageContent/treningUmiejetnosciSpolecznych/listTitleData/treningUmiejetnosciSpolecznychListTitleData";
//
import MetricUnit from "../../../components/metricUnit/metricUnit.js";
import { treningUmiejetnosciSpolecznychMetricData } from "@/app/data/SubpageContent/treningUmiejetnosciSpolecznych/metricData/treningUmiejetnosciSpolecznychMetricData";
//
import ListTemplate from "../../../componentSets/PageTemplate/ListTemplate/ListTemplate.js";
import { treningUmiejetnosciSpolecznychListData } from "@/app/data/SubpageContent/treningUmiejetnosciSpolecznych/listData/treningUmiejetnosciSpolecznychListData";
//
import ContactForm from "../../../components/form/form.js";
//
import SpecialistShowcase from "../../../componentSets/specialistShowcase/specialistShowcase";

export default function TreningUmiejetnosciSpolecznych() {
  return (
    <>
      <article>
        <OfferPageEntry
          pageTitle={treningUmiejetnosciSpolecznychEntryData.pageTitle}
          entryInformation={treningUmiejetnosciSpolecznychEntryData.entryInformation}
          photoSrc={treningUmiejetnosciSpolecznychEntryData.photoSrc}
        />
        <div className={styles.descriptionContainer}>
          <section className={styles.halfDivider}>
            <ListTitleTemplate
              mainTitle={treningUmiejetnosciSpolecznychListTitleData.title}
              mainDescription={treningUmiejetnosciSpolecznychListTitleData.description}
              list={treningUmiejetnosciSpolecznychListTitleData.list}
            />
          </section>

          <section className={styles.halfDivider}>
            <aside>
              {treningUmiejetnosciSpolecznychMetricData.map((item) => {
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
            {treningUmiejetnosciSpolecznychListData.map(item => {
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