import styles from "./form.module.css";
import classNames from 'classnames';

export default function ContactForm() {
  return (
    <>
      <article className={styles.formContainer}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <div className={styles.contactInfo}>
              <h2>FORMULARZ KONTAKTOWY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eleifend condimentum hendrerit. Phasellus vel mauris
                pellentesque enim rutrum commodo. Suspendisse viverra tellus et
                felis pharetra tristique. Phasellus vestibulum sapien nec
                consequat ornare. Sed in posuere urna. Duis eleifend volutpat
                nulla in maximus. Donec auctor sodales sapien ac tincidunt.
              </p>
            </div>

            <form className={styles.contactFields}>
              <div className={styles.infoFieldsRow}>
                <div className={classNames(styles.nameField ,styles.infoField)}>
                  <label htmlFor={styles.dataInput}>IMIĘ</label>
                  <input className={styles.dataInput} type="text" />
                </div>
                <div className={classNames(styles.surnameField, styles.infoField)}>   
                  <label htmlFor={styles.dataInput}>NAZWISKO</label>
                  <input className={styles.dataInput} type="text" />
                </div>
              </div>
              <div className={styles.infoFieldsRow}>
                <div className={classNames(styles.mailField, styles.infoField)}>
                  <label htmlFor={styles.dataInput}>E-MAIL</label>
                  <input className={styles.dataInput} type="text" />
                </div>
                <div className={classNames(styles.phoneField, styles.infoField)}>
                  <label htmlFor={styles.dataInput}>NUMER TELEFONU</label>
                  <input className={styles.dataInput} type="text" />
                </div>
              </div>
              <div
                className={styles.messageField}
              >
                <label htmlFor={styles.textAreaInput}>WIADOMOŚĆ</label>
                <textarea className={styles.textAreaInput} type="text"></textarea>
              </div>
              <div className={styles.contactButton}>
                <input type="submit" value="SKONTAKTUJ SIĘ Z NAMI" />
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
