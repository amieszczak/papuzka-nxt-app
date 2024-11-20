import styles from "./offer-page-entry.module.css";
import classes from '../../../page.module.css';
import Image from "next/image";

export default function OfferPageEntry({
  pageTitle,
  entryInformation,
  photoSrc,
}) {
  return (
    <>
      <section className={styles.entryContainer}>  
        <div className={styles.entryDescription}> 
          <h1 className={classes.headingSecondary}>{pageTitle}</h1>
          <p className={classes.paragraphPrimary}>{entryInformation}</p>
        </div>

        <div className={styles.entryPhotoContainer}>  
          <Image
            className={styles.categoryPhoto}          
            src={photoSrc}
            alt="zdjęcie kategorii"
            width={500}
            height={500}
          />
          <div className={styles.bookButton}> 
            <p>REZERWUJ</p>
          </div>
        </div>
      </section>
    </>
  );
}
