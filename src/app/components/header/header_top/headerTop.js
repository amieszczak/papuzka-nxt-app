"use client";
import styles from "./headerTop.module.css";
import Image from "next/image";
import classNames from "classnames";
import { headerTopData } from "@/app/data/headerTopData/headerTopData.js";

export default function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      {headerTopData.map((item) => {
        return (
          <Image 
            key={item.id}
            className={classNames(
              item.classNames.map((myClass) => styles[myClass])
            )}
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
} // current
