import styles from "./metricUnit.module.css";
import Image from "next/image";

export default function MetricUnit({ src, alt, title, description }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricIcon}>
        <Image src={src} alt={alt} width={70} height={70} />
      </div>
      <div className={styles.metricInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
