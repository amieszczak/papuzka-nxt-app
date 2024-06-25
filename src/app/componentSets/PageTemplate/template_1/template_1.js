import "./template_1.css";
import Image from 'next/image';

{/* <img className="category-photo" src={props.photoSrc} /> */}

export default function Template_1(props) {
  return (
    <>
      <div className="page-o1">
        <section className="page-o1-section-01">
          <div className="middle-page-text">
            <h1>{props.pageTitle}</h1>
            <p>{props.entryInformation}</p>
          </div>
        </section>

        <section className="page-o1-section-02">
          <div className="page-o1-photo">
            <Image
              className="category-photo"
              src={props.photoSrc}
              width={200}
              height={200}
            />
            <div className="book-button">REZERWUJ</div>
          </div>
        </section>
      </div>
    </>
  );
}
