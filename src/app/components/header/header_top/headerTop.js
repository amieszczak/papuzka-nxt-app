import styles from "./headerTop.module.css";
import Image from "next/image";
import classNames from "classnames";


export default function HeaderTop() {
  
  return (
    <div className={styles.headerTop}>
      <Image className={classNames(styles.headerIcon, styles.headerLogo)}
      src='/papużka_logo_linear_closed.svg'
      width={200}
      height={200}
      alt="logo" /> 
      <Image
        className={classNames(styles.headerIcon, styles.headerIconMiddle)}
        width={639}
        height={220}
        src='/Frame15.png'
        alt="logo text"
      /> 
      <Image className={classNames(styles.headerIcon, styles.headerUser)}
      src='/user.svg'
      width={200}
      height={200}
      alt='user-icon' 
      /> 
    </div>
    
  );
}
