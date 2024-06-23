'use client';
import "./header_nav.css";
import activeMenu from './functions/activeMenu.js';
import menuOffer from './functions/menuOffer.js'
import Link from 'next/link';
import { MenuStructure } from '../../../data/menuData/menuData.js';

export default function HeaderNav() {

  return (
    <nav>
      <div className="header-toggle" onClick={activeMenu}></div>
        <div className="menu">
          {MenuStructure.map(item => {
            if(item.offerPages) {
              return (
                <div key={item.id} className={item.class} onClick={menuOffer}>
                  <Link href={item.href}>{item.title}</Link>
                  <div key={item.subId} className={item.subClass}>
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


/* {MenuStructure.filter(mainMenuItem => {
  if(mainMenuItem.offerPages) {
    return(
      <div key={mainMenuItem.id} className={mainMenuItem.class}>
        <Link href={mainMenuItem.href}>{mainMenuItem.title}</Link>
      </div>
  )}
})} */

{/* <nav>
<div className="header-toggle" onClick={activeMenu}></div>
  <div className="menu">
    <div className="main-menu-section menu-offer" onClick={menuOffer}>
      <a href="#">OFERTA</a>
      <div className="offer-dropdown">
          {MenuStructure.map(menuItem => { return (
            <Link key={menuItem.id} href={menuItem.href}>{menuItem.title}</Link>
          )
          })}
      </div>
    </div>
    <div className="main-menu-section">
      <Link href="#">O NAS</Link>
    </div>
    <div className="main-menu-section menu-contact">
      <Link href="#">KONTAKT</Link>
    </div>
  </div>
</nav> */}
