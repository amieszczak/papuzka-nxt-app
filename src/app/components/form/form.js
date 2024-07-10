import styles from "./form.module.css";
import classNames from 'classnames';

export default function ContactForm() {
  return (
    <>
      <article className={styles["form-container"]}>
        <div className={styles["page-o3"]}>
          <div className={styles["contact"]}>
            <div className={styles["contact-info"]}>
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

            <form className={styles["contact-fields"]}>
              <div className={styles["info-fields-row"]}>
                <div className={`${styles["field-1"]} ${styles["info-field"]}`}>
                  <label htmlFor="f1">IMIĘ</label>
                  <input className={styles["f1"]} type="text" />
                </div>
                <div className={classNames(styles['field-2'], styles['info-field'])}>   //{`${styles["field-2"]} ${styles["info-field"]}`}
                  <label htmlFor="f1">NAZWISKO</label>
                  <input className={styles["f1"]} type="text" />
                </div>
              </div>
              <div className={styles["info-fields-row"]}>
                <div className={`${styles["field-3"]} ${styles["info-field"]}`}>
                  <label htmlFor="f1">E-MAIL</label>
                  <input className={styles["f1"]} type="text" />
                </div>
                <div className={`${styles["field-4"]} ${styles["info-field"]}`}>
                  <label htmlFor="f1">NUMER TELEFONU</label>
                  <input className={styles["f1"]} type="text" />
                </div>
              </div>
              <div
                className={`${styles["field-5"]} ${styles["message-field"]}`}
              >
                <label htmlFor="f1">WIADOMOŚĆ</label>
                <textarea className={styles["f5"]} type="text"></textarea>
              </div>
              <div className={styles["contact-button"]}>
                <input type="submit" value="SKONTAKTUJ SIĘ Z NAMI" />
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
