"use client";
import styles from "./headerNav.module.css";
import classes from "../../../page.module.css";
import Link from "next/link";
import classNames from "classnames";
import { MenuStructure } from "../../../data/menuData/menuData.js";
import { useState } from "react";
import { useEffect } from "react";

export default function HeaderNav() {

  const [isOfferMenuActive, setOfferMenuActive] = useState(false);
  const [isMainMenuMobileActive, setMainMenuMobileActive] = useState(false);
   
  

  const handleDropdownHide = (event) => {
    if(window.innerWidth > 1400 && !event.target.closest('#dropdown') && !event.target.closest('#offer')){
      setOfferMenuActive(false);
    } else if(window.innerWidth <= 1400, !event.target.closest('nav')){
      setMainMenuMobileActive(false);
      setOfferMenuActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleDropdownHide);
    window.addEventListener('resize', () => {
      setMainMenuMobileActive(false);
      setOfferMenuActive(false);
    })
  }, [])


  return (
    <nav className={styles.navigation}>
      <div
        className={classNames({
          [styles.headerToggle]: true,
          [styles.headerToggleAnimation]: isMainMenuMobileActive,
        })}
        onClick={() => setMainMenuMobileActive(!isMainMenuMobileActive)}
      ></div>
      <div
        className={classNames({
          [styles.menu]: true,
          [styles.mainMenuMobileActive]: isMainMenuMobileActive,
        })}
      >
        {MenuStructure.map((item) => {
          if (item.offerPages) {
            return (
              <div
                key={item.id}
                id='offer'
                className={classNames(
                  item.class.map((classItem) => styles[classItem])
                )}
                onClick={() => setOfferMenuActive(!isOfferMenuActive)}
              >
                <Link className={classes.paragraphPrimary} href={item.href}>{item.title}</Link>
                <div
                  key={item.subId}
                  id='dropdown'
                  className={classNames({
                    [styles.offerDropdown]: true,
                    [styles.offerDropdownActive]: isOfferMenuActive,
                  })}
                >
                  {item.offerPages.map((offerItem) => {
                    return (
                      <Link className={classes.paragraphPrimary} key={offerItem.id} href={offerItem.href} onClick={() => setMainMenuMobileActive(!isMainMenuMobileActive)} >
                        {offerItem.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className={classNames(
                  item.class.map((classItem) => styles[classItem])
                )}
              >
                <Link className={classes.paragraphPrimary} href={item.href} onClick={() => {setMainMenuMobileActive(!isMainMenuMobileActive); setOfferMenuActive(false)}}>{item.title}</Link>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}