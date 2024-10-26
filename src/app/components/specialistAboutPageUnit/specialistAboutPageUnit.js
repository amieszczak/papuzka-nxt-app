'use client';
import styles from './specialistAbout.module.css';
//
import Image from 'next/image';
//
import classNames from 'classnames';
//
import Aos from 'aos';
import 'aos/dist/aos.css';
//
import { useEffect } from 'react';

const regularClasses = {
    containerClass: styles.containerRegular,
    photoClass: styles.photoContainerRegular,
    contentClass: styles.contentContainerRegular,
    photoBlinderClass: styles.photoBlinderRegular,
}

const reversedClasses = {
    containerClass: styles.containerReversed,
    photoClass: styles.photoContainerReversed,
    contentClass: styles.contentContainerReversed,
    photoBlinderClass: styles.photoBlinderReversed,
}


export default function SpecialistAboutPageUnit({name, description, photoSrc, variant}) {

    useEffect(() => {
        Aos.init();
    }, [])

    let classes;

    switch(variant) {
        case 'reversed':
            classes = reversedClasses;    
        break;
        default: 
            classes = regularClasses;
    }

    return(
        <div className={classNames({[styles.container]: true, [classes.containerClass]:true})}>
            <div className={classNames({[styles.content]: true, [classes.contentClass]:true})}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className={classNames({[styles.photoContainer]: true, [classes.photoClass]:true})}>
                <Image src={photoSrc} width={660} height={510}/>
                <div className={classNames({[styles.photoBlinder]:true, [classes.photoBlinderClass]:true})}></div>
            </div>
        </div>
    )
}