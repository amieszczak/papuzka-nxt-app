'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from './breadcrumbs.module.css';
import classes from '../../page.module.css';
import chevron from '../../../../public/chevron_breadcrumbs.svg';
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {

    const pathname = usePathname();

    const params = useParams();
    
    const slug = params?.slug;

    let titleFromSlug;

    if(slug != undefined) {
        titleFromSlug = slug.charAt(0).toUpperCase() + slug.split('-').join(' ').slice(1);
    }

    //////////
    
    const [location, setLocation] = useState(null);
    const [offer, setOffer] = useState(null);

    function titleFromOffer(){
       return offer.charAt(0).toUpperCase() + offer.split('-').join(' ').slice(1);
    }

    useEffect(() => {
         
        if(window.location.href.includes('oferta')) {
            setLocation('oferta');
            if(pathname.includes('konsultacja-logopedyczna')){
                setOffer('Konsultacja logopedyczna');
            }
            if(pathname.includes('terapia-logopedyczna')){
                setOffer('Terapia logopedyczna');
            }
            if(pathname.includes('trening-umiejetnosci-spolecznych')) {
                setOffer('Trening umiejętności społecznych');
            }
            if(pathname.includes('terapia-reki')) {
                setOffer('Terapia ręki');
            }
            if(pathname.includes('wystawienie-pisemnej-opinii')) {
                setOffer('Wystawienie pisemnej opinii');
            }
        } 

        if(window.location.href.includes('o-nas')) {
            setLocation('o-nas');
        } 
        
        if(window.location.href.includes('kontakt')) {
            setLocation('kontakt');
        } 

        if(window.location.href.includes('artykuly') && slug != undefined) {
            setLocation('artykul');
        } else if(window.location.href.includes('artykuly')) {
            setLocation('artykuly');
        } 

        if(!window.location.href.includes('oferta') 
            && !window.location.href.includes('o-nas')
            && !window.location.href.includes('kontakt')
            && !window.location.href.includes('artykuly')){
                setLocation(null);
            }
            
    

        
    },[pathname])
    //////////

    let linkChain;

    switch(location) {
        case 'oferta':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Oferta', link: '#'},   
                {name: titleFromOffer(), link: '#'}        
            ]
        break;
        case 'o-nas':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'O nas', link: '#'}                
            ]
        break;
        case 'kontakt':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Kontakt', link: '#'}                
            ]
        break;
        case 'artykuly':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Artykuły', link: '#'}
            ]
        break;
        case 'artykul':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Artykuły', link: '/artykuly'},
                {name: titleFromSlug, link: '/artykuly/' + slug }
            ]           
        break;
        default:
            linkChain = null;
        break;
    }    


    return(
        <>
        {linkChain != null 
            ?
            <div className={styles.container}>
                {linkChain?.map((item, index) => {
                    return(
                        <Link key={index} className={styles.link} href={item.link}>
                            <span className={classes.paragraphTertiary}>{item.name}</span>
                            <Image width={30} height={30} src={chevron}/>
                        </Link>     

                    )
                })}
            </div>
            :
            <></>
        }        
        </> 
    )
}