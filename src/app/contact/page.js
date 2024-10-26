import styles from './contact.module.css';
//
import ContactForm from '../components/form/form';
//
import Link from 'next/link';


export default function Contact() {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h1>Skontaktuj się z <span>nami </span></h1>
                <div className={styles.content}>
                    <p>Jesteśmy dostępni od poniedziałku do piątku w godzinach popołudniowych w naszych gabinetach w Krakowie. Alternatywnie zapraszamy do kontaktu telefonicznego/mailowego lub przez nasz formularz kontaktowy.</p>
                    <div className={styles.contactDataContainer}>
                        <Link className={styles.link} href='#'>+48 111222333</Link>
                        <Link className={styles.link} href='#'>papuzka@papuzka.com</Link>
                        <Link className={styles.link} href='#'>Kraków, ul.Adres 1/1</Link>
                    </div>
                </div>
                <div className={styles.mapContainer}></div>
            </div>
            <ContactForm/>
        </div>
    )
}