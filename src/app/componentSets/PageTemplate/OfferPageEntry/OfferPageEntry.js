import "./offer-page-entry.css";
import Image from 'next/image';

export default function OfferPageEntry({pageTitle, entryInformation, photoSrc}) {
  return (
    <>
      <div className="page-o1">
        <section className="page-o1-section-01">
          <div className="middle-page-text">
            <h1>{pageTitle}</h1>
            <p>{entryInformation}</p>
          </div>
        </section>

        <section className="page-o1-section-02">
          <div className="page-o1-photo">
            <Image
              className="category-photo"
              src={photoSrc}
              alt="zdjęcie kategorii"
              width={500}
              height={500}
            />
            <div className="book-button">REZERWUJ</div>
          </div>
        </section>
      </div>
    </>
  );
}


