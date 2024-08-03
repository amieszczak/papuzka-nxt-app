'use client';
import styles from './headerNav.module.css'
import activeMenu from './functions/activeMenu.js';
import menuOffer from './functions/menuOffer.js'
import Link from 'next/link';
import classNames from 'classnames';
import { MenuStructure } from '../../../data/menuData/menuData.js';
import { useState } from 'react';



export default function HeaderNav() {

/*   const [dropdown, setDropdown] = useState[true]; */

/* function activeMenu() {
  let menuDropdown = document.querySelector(styles.offerDropdown);
  let header = document.querySelector(styles.navigation);
  header.classList.toggle(styles.mainMenuActive); 
  menuDropdown.classList.toggle(styles.offerDropdownActive);
} */

  return (
    <nav className={styles.navigation}>
      <div className={styles.headerToggle} onClick={activeMenu}></div>
        <div className={styles.menu}>
          {MenuStructure.map(item => {
            if(item.offerPages) {
              return (
                <div key={item.id} className={classNames(item.class.map(classItem => styles[classItem]))} onClick={menuOffer}> 
                  <Link href={item.href}>{item.title}</Link>
                  <div key={item.subId} className={styles[item.subClass]}>
                    {item.offerPages.map(offerItem => {
                      return (
                        <Link key={offerItem.id} href={offerItem.href}>{offerItem.title}</Link>
                      )
                    })}
                  </div>
                </div>
              )
            } else {
              return (
                <div key={item.id} className={item.class}>
                  <Link href={item.href}>{item.title}</Link>
                </div>
              )
            }
          })}
        </div>
    </nav>
  );
}



{/* <nav>
      <div className={styles.headerToggle} onClick={activeMenu}></div>
        <div className={styles.menu}>
          {MenuStructure.map(item => {
            if(item.offerPages) {
              return (
                <div key={item.id} className={classNames(item.class.map(classItem => styles[classItem]))} onClick={menuOffer}> 
                  <Link href={item.href}>{item.title}</Link>
                  <div key={item.subId} className={styles[item.subClass]}>
                    {item.offerPages.map(offerItem => {
                      return (
                        <Link key={offerItem.id} href={offerItem.href}>{offerItem.title}</Link>
                      )
                    })}
                  </div>
                </div>
              )
            } else {
              return (
                <div key={item.id} className={item.class}>
                  <Link href={item.href}>{item.title}</Link>
                </div>
              )
            }
          })}
        </div>
    </nav> */}