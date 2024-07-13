import styles from './therapist-info.module.css';
import { SpecialistsData } from '@/app/data/SpecialistsData/specialistsData.js';
import classNames from 'classnames';



export default function TherapistInfo({currentSpecialist}) {

    
    return (
        
        <div className={styles.specInfo}>
           {SpecialistsData.map(person => {
            
            return (
                <div data-id={person.id} key={person.id} className={classNames({
                    [styles.specialist]: true,
                    [styles.active]: person.id === currentSpecialist               
                })} > 
                    <h2>{person.name}</h2>
                    <p>{person.description}</p>
                </div>
            )
           })}
        </div>
    )
}