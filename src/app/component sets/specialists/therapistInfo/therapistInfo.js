import styles from './therapist-info.module.css';
import { SpecialistsData } from '@/app/data/SpecialistsData/specialistsData.js';

console.log(SpecialistsData);

export default function TherapistInfo({onInfo}) {

    /* const displayInfo = (id) => {
        onInfo(id);
    } */
    
    return (
        
        <div className="spec-info">
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


{/* <div className="spec-info">
<h2>Magdalena Żak</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
eleifend condimentum hendrerit. Phasellus vel mauris
pellentesque enim rutrum commodo. Suspendisse viverra tellus
et felis pharetra tristique. Phasellus vestibulum sapien nec
consequat ornare. Sed in posuere urna. Duis eleifend volutpat
nulla in maximus. Donec auctor sodales sapien ac tincidunt.
</p>
</div> */}