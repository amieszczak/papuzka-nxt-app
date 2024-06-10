import './form.css';

export default function ContactForm() {
  return (
    <>
      <article>
        <div className="page-o3">
          <div className="contact">
            <div className="contact-info">
              <h2>FORMULARZ KONTAKTOWY</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eleifend condimentum hendrerit. Phasellus vel mauris pellentesque enim
                rutrum commodo. Suspendisse viverra tellus et felis pharetra
                tristique. Phasellus vestibulum sapien nec consequat ornare. Sed in
                posuere urna. Duis eleifend volutpat nulla in maximus. Donec auctor
                sodales sapien ac tincidunt.
              </p>
            </div>

            <form className="contact-fields">
              <div className='info-fields-row'>
                <div className="field-1 info-field">
                  <label htmlFor="f1">IMIĘ</label>
                  <input className="f1" type="text" />
                </div>
                <div className="field-2 info-field">
                  <label htmlFor="f1">NAZWISKO</label>
                  <input className="f1" type="text" />
                </div>
              </div>
              <div className='info-fields-row'>
                <div className="field-3 info-field">
                  <label htmlFor="f1">E-MAIL</label>
                  <input className="f1" type="text" />
                </div>
                <div className="field-4 info-field">
                  <label htmlFor="f1">NUMER TELEFONU</label>
                  <input className="f1" type="text" />
                </div>
              </div>
              <div className="field-5 message-field">
                <label htmlFor="f1">WIADOMOŚĆ</label>
                <textarea className="f5" type="text"></textarea>
              </div>
              <div className="contact-button">
                <input type="submit" value="SKONTAKTUJ SIĘ Z NAMI" />
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  )
}


