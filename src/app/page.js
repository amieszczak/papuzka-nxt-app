'use client';
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import LandingPageVideoComponent from "./componentSets/landingPage/LPvideoComponent/landingPageVideoComponent";
import LandingPageOfferComponent from "./componentSets/landingPage/LPofferComponent/landingPageOfferComponent";
import LandingPageQuoteComponent from "./componentSets/landingPage/LPquoteComponent/landingPageQuoteComponent";
import LandingPageAboutComponent from "./componentSets/landingPage/LPaboutComponent/landingPageAboutComponent";
import LandingPageTeamComponent from "./componentSets/landingPage/LPteamComponent/landingPageTeamComponent";
import LandingPageArticlesComponent from "./componentSets/landingPage/LParticlesComponent/landingPageArticlesComponent";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <LandingPageVideoComponent/>
        <LandingPageOfferComponent data-aos='fade-up'/>
        <LandingPageQuoteComponent/>
        <LandingPageAboutComponent/>
        <LandingPageTeamComponent/>
        <LandingPageArticlesComponent/>
      </main>
    </>
  );
}
 