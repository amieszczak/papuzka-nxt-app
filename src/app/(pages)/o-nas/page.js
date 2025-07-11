import styles from './page.module.css';
//
import LandingPageAboutComponent from '../../componentSets/landingPage/LPaboutComponent/landingPageAboutComponent.js';
//
import SpecialistAboutPageUnit from '../../components/specialistAboutPageUnit/specialistAboutPageUnit.js';
//
import { aboutData } from '@/app/data/aboutData/aboutData.js';


export default function About() {
    return(
        <div className={styles.container}>            
            <LandingPageAboutComponent/>            
            <div className={styles.specialistsContainer}>
                {aboutData.map(item => {
                    return(
                        <SpecialistAboutPageUnit key={item.id} {...item} variant={item.id % 2 == 0 ? 'reversed' : null}/>
                    )
                })}
            </div>            
        </div>
    )
}
