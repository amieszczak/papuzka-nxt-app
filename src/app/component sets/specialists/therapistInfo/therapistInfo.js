import styles from './therapist-info.module.css';
import { SpecialistsData } from '@/app/data/SpecialistsData/specialistsData.js';
import classNames from 'classnames';

console.log(SpecialistsData);

export default function TherapistInfo({currentSpecialist}) {

    /* const displayInfo = (id) => {
        onInfo(id);
    } */


    
    return (
        
        <div className={styles['spec-info']}>
           {SpecialistsData.map(person => {
            
            return (
                <div data-id={person.id} key={person.id} className={classNames({
                    [styles.specialist]: true,
                    [styles.active]: person.id === currentSpecialist               
                })} > {/* id={`specialist_${person.id}`} */} 
                    <h2>{person.name}</h2>
                    <p>{person.description}</p>
                </div>
            )
           })}
        </div>
    )
}