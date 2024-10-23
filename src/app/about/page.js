import styles from './about.module.css';
//
import LandingPageAboutComponent from '../componentSets/landingPage/LPaboutComponent/landingPageAboutComponent.js';


export default function About() {
    return(
        <div className={styles.container}>
            <LandingPageAboutComponent/>
        </div>
    )
}