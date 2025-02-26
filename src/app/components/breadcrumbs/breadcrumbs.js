'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from './breadcrumbs.module.css';
import classes from '../../page.module.css';
import chevron from '../../../../public/chevron_breadcrumbs.svg';
import Image from "next/image";

export default function Breadcrumbs({location}) {

    const params = useParams();
    
    const slug = params?.slug;

    let titleFromSlug;

    if(slug != undefined) {
        titleFromSlug = slug.charAt(0).toUpperCase() + slug.split('-').join(' ').slice(1);
    }
    

    let linkChain;

    switch(location) {
        case 'oferta':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'oferta', link: '#'}                
            ]
        break;
        case 'artykuly':
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Artykuły', link: '/'}
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
            linkChain = [
                {name: 'Strona główna', link: '/'},
                {name: 'Inne', link: '/'}
            ]
        break;
    }
    

    return(
        <div className={styles.container}>
            {linkChain?.map(item => {
                return(
                    <Link className={styles.link} href={item.link}>
                        <span className={classes.paragraphTertiary}>{item.name}</span>
                        <Image width={30} height={30} src={chevron}/>
                    </Link>     

                )
            })}
        </div>
        
        
    )
}