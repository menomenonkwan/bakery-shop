import Hero from "./Hero";
import TopItems from "./TopItems";
import About from "./About";
import VideoSection from "./VideoSection";
import ContactSection from "./ContactSection";
import Subscribe from "../../components/Subscribe";

// styles & images
import './Home.scss';

export default function Home() {
  return (
    <div>
      <Hero />
      <TopItems />
      <About />
      <VideoSection />
      <ContactSection />
      <Subscribe />
    </div>
  );
}
