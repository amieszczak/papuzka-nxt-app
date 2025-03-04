'use client'
import Link from "next/link";
import styles from './breadcrumbs.module.css';
import classes from '../../page.module.css';
import chevron from '../../../../public/chevron_breadcrumbs.svg';
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {

    const pathname = usePathname();
    
    const [linkChain, setLinkChain] = useState(null)

    useEffect(() => {

            if(pathname == '/') {
                setLinkChain(null);
                return;
            }

            const chainData = [{name: 'Strona główna', link: '/'}];

            pathname.slice(1).split('/').forEach(item => {
                const displayedTitle = item.charAt(0).toUpperCase() + item.split('-').join(' ').slice(1)
                chainData.push({name: displayedTitle, link: item})
            })

            setLinkChain(chainData);

    },[pathname])


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