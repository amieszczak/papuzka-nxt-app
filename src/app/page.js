'use client';
import styles from "./page.module.css";
import dynamic from "next/dynamic";

export default function Home() {

  const LandingPageVideoComponent = dynamic(() => import('./componentSets/landingPage/LPvideoComponent/landingPageVideoComponent.js'), {
    ssr: false,
  });

  const LandingPageOfferComponent = dynamic(() => import('./componentSets/landingPage/LPofferComponent/landingPageOfferComponent.js'), {
    ssr: false,
  });
  
  const LandingPageQuoteComponent = dynamic(() => import('./componentSets/landingPage/LPquoteComponent/landingPageQuoteComponent.js'), {
    ssr: false,
  });

  const LandingPageAboutComponent = dynamic(() => import('./componentSets/landingPage/LPaboutComponent/landingPageAboutComponent.js'), {
    ssr: false,
  });

  const LandingPageTeamComponent = dynamic(() => import('./componentSets/landingPage/LPteamComponent/landingPageTeamComponent.js'), {
    ssr: false,
  });

  const LandingPageArticlesComponent = dynamic(() => import('./componentSets/landingPage/LParticlesComponent/landingPageArticlesComponent.js'), {
    ssr: false,
  });


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
