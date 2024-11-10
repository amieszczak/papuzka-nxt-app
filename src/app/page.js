import Image from "next/image";
import styles from "./page.module.css";
//components
import LandingPageVideoComponent from "./componentSets/landingPage/LPvideoComponent/landingPageVideoComponent.js";
//
import LandingPageOfferComponent from "./componentSets/landingPage/LPofferComponent/landingPageOfferComponent.js";
//
import LandingPageQuoteComponent from "./componentSets/landingPage/LPquoteComponent/landingPageQuoteComponent.js";
//
import LandingPageAboutComponent from "./componentSets/landingPage/LPaboutComponent/landingPageAboutComponent.js";
//
import LandingPageTeamComponent from "./componentSets/landingPage/LPteamComponent/landingPageTeamComponent.js";
//
import LandingPageArticlesComponent from "./componentSets/landingPage/LParticlesComponent/landingPageArticlesComponent.js";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <LandingPageVideoComponent/>
        <LandingPageOfferComponent classes={styles} data-aos='fade-up'/>
        <LandingPageQuoteComponent/>
        <LandingPageAboutComponent/>
        <LandingPageTeamComponent/>
        <LandingPageArticlesComponent/>
      </main>
    </>
    
  );
}
