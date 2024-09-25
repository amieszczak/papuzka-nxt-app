import Image from "next/image";
import styles from "./page.module.css";
//components
import LandingPageVideoComponent from "./componentSets/landingPage/LPvideoComponent/landingPageVideoComponent.js";
//
import LandingPageOfferComponent from "./componentSets/landingPage/LPofferComponent/landingPageOfferComponent.js";
//

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <LandingPageVideoComponent/>
        <LandingPageOfferComponent data-aos='fade-up'/>
      </main>
    </>
    
  );
}
