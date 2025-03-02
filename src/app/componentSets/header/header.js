'use client';
import HeaderTop from "./header_top/headerTop.js";
import HeaderNav from "./header_nav/headerNav.js";
/* import './header.css'; */
import { useState } from 'react';
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs.js";
import styles from './header.module.css';

export default function Header() {

    const [isValue, setIsValue] = useState(false); 

    const updateValue = (newValue) => {
        setIsValue(newValue); 
      };

    return (
        <div className={styles.container}>
            <header className={styles.header}>        
                <HeaderTop isValue={() => updateValue}/>
                <HeaderNav isValue={() => isValue}/>            
            </header>        
            <div className={styles.breadcrumbsContainer}>
                <Breadcrumbs/>      
            </div>            
        </div>
        
    )
}