import styles from './landingPageMarkup.module.css';
//
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

export default function LandingPageMarkup({category, side}) {

    useEffect(() => {
        Aos.init();
    }, [])

    let aos;

    switch(side) {
        case 'left': 
            aos = 'fade-right';
        break;
        case 'right':
            aos = 'fade-left';
        break;
        default: 
            aos = 'fade-up';
    }

    return(
        <div className={classNames({[styles.background]:true, [styles.left]:side === 'left', [styles.right]:side === 'right'})} data-aos={aos}>
            <p className={styles.paragraph}>{category}</p>    
        </div>
    )
}