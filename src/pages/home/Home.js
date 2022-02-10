import Hero from "../../components/Hero";
import TopItems from "../../components/TopItems";
import About from "./About";
import VideoSection from "./VideoSection";
import ContactSection from "./ContactSection";
import Subscribe from "../../components/Subscribe";
import { homeHeroContent } from "../../assets/content";

// styles & images
import './Home.scss';

export default function Home() {
  return (
    <div>
      <Hero content={homeHeroContent} />
      <TopItems />
      <About />
      <VideoSection />
      <ContactSection />
      <Subscribe />
    </div>
  );
}
