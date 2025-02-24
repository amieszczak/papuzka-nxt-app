import styles from "./page.module.css";
import LandingPageVideoComponent from "./componentSets/landingPage/LPvideoComponent/landingPageVideoComponent";
import LandingPageOfferComponent from "./componentSets/landingPage/LPofferComponent/landingPageOfferComponent";
import LandingPageQuoteComponent from "./componentSets/landingPage/LPquoteComponent/landingPageQuoteComponent";
import LandingPageAboutComponent from "./componentSets/landingPage/LPaboutComponent/landingPageAboutComponent";
import LandingPageTeamComponent from "./componentSets/landingPage/LPteamComponent/landingPageTeamComponent";
import LandingPageArticlesComponent from "./componentSets/landingPage/LParticlesComponent/landingPageArticlesComponent";
import getAllPosts from "@/integrations/wordpress/getAllPosts";

export default async function Home() {

  const posts = await getAllPosts();

  return (
    <>
      <main className={styles.main}>
        <LandingPageVideoComponent/>
        <LandingPageOfferComponent data-aos='fade-up'/>
        <LandingPageQuoteComponent/>
        <LandingPageAboutComponent/>
        <LandingPageTeamComponent/>
        <LandingPageArticlesComponent posts={posts}/>
      </main>
    </>
  );
}
 