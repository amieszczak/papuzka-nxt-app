"use client";
import styles from "./headerTop.module.css";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { headerTopData } from "@/app/data/headerTopData/headerTopData.js";
import { useState } from "react";
import { useEffect } from "react";


export default function HeaderTop({isValue}) {

  const [value, setValue] = useState({isValue});

  const handleClick = () => {
    setValue((prevValue) => !prevValue);
  }

  useEffect(() => {
    console.log('isValue:', isValue);
  }, [value])

  return (
    <div className={styles.headerTop}>
      {headerTopData.map((item) => {
        if (item.href) {
          return (
            <Link 
              key={item.id}
              href={item.href} 
              onClick={handleClick}
              className={classNames(item.classNames.map((myClass) => styles[myClass]))}
              >
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </Link>
          )
        }
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
}
