'use client';
import HeaderTop from "./header_top/headerTop.js";
import HeaderNav from "./header_nav/headerNav.js";
import './header.css';
import { useState } from 'react';

export default function Header() {

    const [isValue, setIsValue] = useState(false); 

    const updateValue = (newValue) => {
        setIsValue(newValue); 
      };

    return (
        <header>
            <HeaderTop isValue={() => updateValue}/>
            <HeaderNav isValue={() => isValue}/>
        </header>
    )
}