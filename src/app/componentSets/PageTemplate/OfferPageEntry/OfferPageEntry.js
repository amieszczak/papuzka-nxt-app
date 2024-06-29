import "./offer-page-entry.css";
import Image from "next/image";

export default function OfferPageEntry({
  pageTitle,
  entryInformation,
  photoSrc,
}) {
  return (
    <>
      <section className="entry-container">
        <div className="entry-description">
          <h1>{pageTitle}</h1>
          <p>{entryInformation}</p>
        </div>

        <div className="entry-photo-container">
          <Image
            className="category-photo"
            src={photoSrc}
            alt="zdjęcie kategorii"
            width={500}
            height={500}
          />
          <div className="book-button">
            <p>REZERWUJ</p>
          </div>
        </div>
      </section>
    </>
  );
}
