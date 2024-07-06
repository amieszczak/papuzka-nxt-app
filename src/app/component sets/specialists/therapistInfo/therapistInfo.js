import styles from './therapist-info.module.css';
import { SpecialistsData } from '@/app/data/SpecialistsData/specialistsData.js';

console.log(SpecialistsData);

export default function TherapistInfo({onInfo}) {

    /* const displayInfo = (id) => {
        onInfo(id);
    } */
    
    return (
        
        <div className={styles['spec-info']}>
           {SpecialistsData.map(person => {
            
            return (
                <div key={person.id} className={styles.specialist} id={`specialist_${person.id}`}> 
                    <h2>{person.name}</h2>
                    <p>{person.description}</p>
                </div>
            )
           })}
        </div>
    )
}