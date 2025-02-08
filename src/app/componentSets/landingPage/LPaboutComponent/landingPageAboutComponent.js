'use client';
import styles from './landingPageAbout.module.css';
import classes from '../../../page.module.css';
//
import Image from 'next/image';
//
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
//
import LandingPageMarkup from '@/app/components/landingPageMarkup/landingPageMarkup';
//
import classNames from 'classnames';

export default function LandingPageAboutComponent() {

    useEffect(() => {
        Aos.init();
      }, [])

    return(
        <div className={styles.container}>     
            <h2 className={classNames({[styles.title]:true, [classes.headingSecondary]:true})}>Jesteśmy grupą specjalistek z <span>misją</span></h2>  
            <LandingPageMarkup category='O NAS' side='right'/>
            <div className={styles.photoContainer} data-aos='fade-right'>
                <div className={styles.photo}>
                    <Image src='/landingPage/about.png' alt="papużka zespół" width={896} height={695}/>
                </div>
                <div className={styles.photoLineTop}></div>
                <div className={styles.photoLineBottom}></div>
            </div>
            <div className={styles.descriptionContainer} data-aos='fade-left'>
            <p className={classNames({[styles.description]:true, [classes.paragraphSecondary]:true})}>
                Nunc diam sapien, dapibus non molestie id, convallis sed ligula. Praesent dictum metus et est suscipit commodo. Fusce sollicitudin, turpis eget ullamcorper finibus, turpis enim efficitur eros, vitae lacinia quam urna at est. Aenean quis fringilla orci. Maecenas velit nisi, tincidunt eu rutrum sed, fermentum vel urna. Curabitur condimentum ac quam ac tempus. Suspendisse augue ligula, lacinia eu porttitor quis, euismod nec eros. Sed posuere arcu vitae erat mattis rhoncus. Integer id nibh libero. Morbi cursus, risus egestas commodo ornare, neque tortor aliquet quam, eget dictum metus turpis ac ligula. Nullam accumsan rutrum dui eget consectetur. Quisque et velit neque. Nunc ante erat, fermentum non venenatis et, pretium vel nisi. 
            </p>
            </div>
        </div>
    )
}