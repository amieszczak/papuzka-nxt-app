"use client";
import styles from "./headerNav.module.css";
import Link from "next/link";
import classNames from "classnames";
import { MenuStructure } from "../../../data/menuData/menuData.js";
import { useState } from "react";
import { useEffect } from "react";

export default function HeaderNav({isValue}) {

  const [isOfferMenuActive, setOfferMenuActive] = useState(false);
  const [isMainMenuMobileActive, setMainMenuMobileActive] = useState(isValue);

  /* useEffect(() => {
    setMainMenuMobileActive(isValue);
  }, [isValue]) */

/*   console.log(isValue); */

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
                className={classNames(
                  item.class.map((classItem) => styles[classItem])
                )}
                onClick={() => setOfferMenuActive(!isOfferMenuActive)}
              >
                <Link href={item.href}>{item.title}</Link>
                <div
                  key={item.subId}
                  className={classNames({
                    [styles.offerDropdown]: true,
                    [styles.offerDropdownActive]: isOfferMenuActive,
                  })}
                >
                  {item.offerPages.map((offerItem) => {
                    return (
                      <Link key={offerItem.id} href={offerItem.href} onClick={() => setMainMenuMobileActive(!isMainMenuMobileActive)}>
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
                <Link href={item.href} onClick={() => setMainMenuMobileActive(!isMainMenuMobileActive)}>{item.title}</Link>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}