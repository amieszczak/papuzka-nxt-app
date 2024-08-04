"use client";
import styles from "./headerNav.module.css";
import Link from "next/link";
import classNames from "classnames";
import { MenuStructure } from "../../../data/menuData/menuData.js";
import { useState } from "react";

export default function HeaderNav() {
  const [isOfferMenuHidden, setOfferMenuHidden] = useState(true);
  const [isMainMenuMobileHidden, setMainMenuMobileHidden] = useState(true);

  return (
    <nav className={styles.navigation}>
      <div
        className={classNames({
          [styles.headerToggle]: true,
          [styles.headerToggleAnimation]: isMainMenuMobileHidden,
        })}
        onClick={() => setMainMenuMobileHidden(!isMainMenuMobileHidden)}
      ></div>
      <div
        className={classNames({
          [styles.menu]: true,
          [styles.mainMenuMobileActive]: isMainMenuMobileHidden,
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
                onClick={() => setOfferMenuHidden(!isOfferMenuHidden)}
              >
                <Link href={item.href}>{item.title}</Link>
                <div
                  key={item.subId}
                  className={classNames({
                    [styles.offerDropdown]: true,
                    [styles.offerDropdownActive]: isOfferMenuHidden,
                  })}
                >
                  {item.offerPages.map((offerItem) => {
                    return (
                      <Link key={offerItem.id} href={offerItem.href}>
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
                <Link href={item.href}>{item.title}</Link>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
}