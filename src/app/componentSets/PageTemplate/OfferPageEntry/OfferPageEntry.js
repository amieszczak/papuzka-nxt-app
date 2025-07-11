'use client';
import styles from "./offerPageEntry.module.css";
import classes from '../../../page.module.css';
import Image from "next/image";

export default function OfferPageEntry({
  pageTitle,
  entryInformation,
  photoSrc,
}) {

  function handleScroll() {
    const specialists = document.getElementById("specialists");

    if(specialists) {
      specialists.scrollIntoView({behavior: 'smooth'});
    }
  }

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
          <div onClick={handleScroll} className={styles.bookButton}> 
            <p>REZERWUJ</p>
          </div>
        </div>
      </section>
    </>
  );
}