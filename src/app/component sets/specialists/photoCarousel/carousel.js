import './carousel.css';
import Image from 'next/image';
import specialist_1 from '../img/magda.png';


export default function Carousel() {
    return (
        <div className='carousel-container'>
            <div className='therapist-carousel'>
                <div className='carousel-track'>

                <Image 
                src={specialist_1}
                alt="Therapist Magdalena"
                className='therapist-photo'
                />

                <Image 
                src={specialist_1}
                alt="Therapist Magdalena"
                className='therapist-photo'
                />

                <Image 
                src={specialist_1}
                alt="Therapist Magdalena"
                className='therapist-photo'
                />

                <Image 
                src={specialist_1}
                alt="Therapist Magdalena"
                className='therapist-photo'
                />
                
                </div>
            </div>
        </div>
        
    )
}


