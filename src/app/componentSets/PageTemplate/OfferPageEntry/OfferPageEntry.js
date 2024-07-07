import styles from "./offer-page-entry.module.css";
import Image from "next/image";

export default function OfferPageEntry({
  pageTitle,
  entryInformation,
  photoSrc,
}) {
  return (
    <>
      <section className={styles['entry-container']}>  {/* "entry-container" */} 
        <div className={styles['entry-description']}>  {/* "entry-description" */}
          <h1>{pageTitle}</h1>
          <p>{entryInformation}</p>
        </div>

        <div className={styles['entry-photo-container']}>  {/* "entry-photo-container" */}
          <Image
            className={styles['category-photo']}          /* "category-photo" */
            src={photoSrc}
            alt="zdjęcie kategorii"
            width={500}
            height={500}
          />
          <div className={styles['book-button']}>  {/* "book-button" */}
            <p>REZERWUJ</p>
          </div>
        </div>
      </section>
    </>
  );
}
