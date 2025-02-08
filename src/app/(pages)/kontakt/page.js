'use client';
import styles from './page.module.css';
import classes from '../../page.module.css';
//
import ContactForm from '../../components/form/form';
//
import Link from 'next/link';
import Image from 'next/image';
//
import dynamic from "next/dynamic";
//
import classNames from 'classnames';


export default function Contact() {

    const LocationMap = dynamic(() => import("../../components/map/map.js"), { ssr:false });

    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.infoContainerTopLine}></div>
                <h1 className={classes.headingSecondary}>Skontaktuj się z <span>nami </span></h1>
                <div className={styles.content}>
                    <p className={classes.parĻagraphSecondary}>Jesteśmy dostępni od poniedziałku do piątku w godzinach popołudniowych w naszych gabinetach w Krakowie. Alternatywnie zapraszamy do kontaktu telefonicznego/mailowego lub przez nasz formularz kontaktowy.</p>
                    <div className={styles.contactDataContainer}>
                        <Link className={styles.link} href='#'>
                            <div className={styles.iconContainer}>
                                <Image layout='fill' alt="" src='/contact/phone.svg' />
                            </div>                            
                            <p className={classes.paragraphTertiary}>+48 111222333</p>
                        </Link>
                        <Link className={styles.link} href='#'>
                            <div className={styles.iconContainer}>
                                <Image layout='fill' alt="" src='/contact/message.svg' />
                            </div>                            
                            <p className={classes.paragraphTertiary}>papuzka@papuzka.com</p>
                        </Link>
                        <Link className={styles.link} href='#'>
                            <div className={styles.iconContainer}>
                                <Image layout='fill' alt="" src='/contact/location.svg' />
                            </div>                            
                            <p className={classes.paragraphTertiary}>Kraków, ul.Adres 1/1</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div className={classNames({[styles.mapBlinder]: true, [styles.topMapBlinder]: true})}></div>
                    <div className={classNames({[styles.mapBlinder]: true, [styles.leftMapBlinder]:true})}></div>
                    <div className={classNames({[styles.mapBlinder]: true, [styles.rightMapBlinder]: true})}></div>
                    <div className={classNames({[styles.mapBlinder]: true, [styles.bottomMapBlinder]: true})}></div>
                    <LocationMap/>
                    <div className={styles.mapBorderAdditional}></div>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
}