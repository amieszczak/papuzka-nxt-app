import styles from './footerMenu.module.css';
import { footerMenuData } from '@/app/data/footerData/footerMenuData.js';
import Link from 'next/link';

export default function FooterMenu() {
    return (
      <div className={styles.footerMenu}>
        <ul>
          {footerMenuData.map(item => {
            return (
              <li key={item.id}><Link href={item.href}>{item.title}</Link></li>
            )
          })}
        </ul>
      </div>
    )
}       