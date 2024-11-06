import styles from "./footerBottom.module.css";
import { footerBottomData } from "@/app/data/footerData/footerBottomData.js";
import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerBottomContent}>
        {footerBottomData.map((item) => {
          if (item.units) {
            return (
              <div key={item.id} className={styles[item.class]}>
                <ul>
                  {item.units.map((element) => {
                    return (
                      <li key={element.id}>
                        <Link
                          href={element.href}
                          className={styles[element.class]}
                        >
                          {element.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
      {footerBottomData.map(item => {
        return(
          <div key={item.id} className={styles[item.class]}>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  );
}