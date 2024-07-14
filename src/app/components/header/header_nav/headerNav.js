'use client';
import "./header_nav.css";
import activeMenu from './functions/activeMenu.js';
import menuOffer from './functions/menuOffer.js'
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
/* import Layout from "../../pages/Layout.js"; */
import ContactScroll from "./functions/contactScroll.js";
import Link from 'next/link';




export default function HeaderNav() {
  
  return (
    <nav>
      <div className="header-toggle" onClick={activeMenu}></div>
      <div className="menu">
      <div className="main-menu-section menu-offer" onClick={menuOffer}>
        <a href="#">OFERTA</a>
        <div className="offer-dropdown">
            <Link href="offer_1">KONSULTACJA LOGOPEDYCZNA</Link>
            <Link href="offer_2">TERAPIA LOGOPEDYCZNA</Link>
            <Link href="offer_3">TUS (TRENING UMIEJĘTNOŚCI SPOŁECZNYCH)</Link>
            <Link href="offer_4">TERAPIA RĘKI</Link>
            <Link href="offer_5">WYSTAWIENIE PISEMNEJ OPINII</Link>      
        </div>
        </div>
        <div className="main-menu-section">
          <Link href="#">O NAS</Link>
        </div>
        <div className="main-menu-section menu-contact" onClick={ContactScroll}>
          <Link href="#">KONTAKT</Link>
        </div>
      </div>
    </nav>
  );
  
}
