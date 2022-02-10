import { menuHeroContent } from '../assets/content';
import Hero from '../components/Hero';
import TopItems from '../components/TopItems';

export default function Menu() {
  return (
    <div>
      <Hero content={menuHeroContent} />
      <section>
        <p>top menu of types</p>
        <p>grid images w/ $$ and add to order</p> 
      </section>
      <TopItems />
      <section id="our_specials">
        <p>top menu of types</p>
        <p>grid images w/ $$ and add to order</p> 
      </section>
    </div>
  );
}
