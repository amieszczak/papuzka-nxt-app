'use client';
import './carousel.css';
import Image from 'next/image';
import specialist_1 from '../img/magda.png';
import specialist_2 from '../img/iza.jpg';
import specialist_3 from '../img/angelika.jpg';
import carouselMovement from './functions/carouselFunctions.js';

console.log(carouselMovement);

export default function Carousel({onSpecialists}) {
    
    
    const SelectSpecialist = (id) => {  /* SelectSpecialist2 */
        onSpecialists(id);
    }
    
    return (
        <div className='carousel-container'>
            <div className='therapist-carousel'>
                <div className='carousel-track'>

                <div onClick={() => onSpecialists('specialist-Magdalena')} className='therapist-photo-container'>
                    <Image 
                    src={specialist_1}
                    alt="Therapist Magdalena"
                    className='therapist-photo'
                    />
                </div>
                
                <div onClick={() => onSpecialists('specialist-Izabela')} className='therapist-photo-container'>
                    <Image 
                    src={specialist_2}
                    alt="Therapist Izabela"
                    className='therapist-photo'
                    />
                </div>
                
                <div onClick={() => onSpecialists('specialist-Angelika')} className='therapist-photo-container'>
                    <Image 
                    src={specialist_3}
                    alt="Therapist Angelika"
                    className='therapist-photo'
                    />    
                </div>
                
                <div onClick={() => onSpecialists('specialist-Natalia')} className='therapist-photo-container'>
                    <Image 
                    src={specialist_1}
                    alt="Therapist Magdalena"
                    className='therapist-photo'
                    />
                </div>
                
                </div>
            </div>
        </div>
        
    )
}


