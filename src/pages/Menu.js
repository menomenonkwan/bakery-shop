import { cupcakeOptions, menuHeroContent, cookieOptions,
  brownieOptions, 
  cakeOptions,
  donutOptions} from '../assets/content';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import TopItems from '../components/TopItems';

// styles
import './Menu.scss';

export default function Menu() {
  
  return (
    <div>
      <Hero content={menuHeroContent} />
      <div className="menu_nav">
        <ul>
          <li>
            <a href="#cupcakes">Cupcakes</a>
          </li>
          <li>
            <a href="#cookies">Cookies</a>
          </li>
          <li>
            <a href="#brownies">Brownies</a>
          </li>
          <li>
            <a href="#donuts">Donuts</a>
          </li>
          <li>
            <a href="#cakes">Cakes</a>
          </li>
          <li>
            <a href="#specials">More</a>
          </li>
        </ul>
      </div>

      <section className="menu_section" id="cupcakes">
        <h1>Cupcakes</h1>
        <Grid content={cupcakeOptions} />
      </section>

      <section className="menu_section" id="cookies">
        <h1>Cookies</h1>
        <Grid content={cookieOptions} />
      </section>

      <section className="menu_section" id="brownies">
        <h1>Brownies</h1>
        <Grid content={brownieOptions} />
      </section>

      <section className="menu_section" id="donuts">
        <h1>Donuts</h1>
        <Grid content={donutOptions} />
      </section>

      <section className="menu_section" id="cakes">
        <h1>Cakes</h1>
        <Grid content={cakeOptions} />
      </section>

      <TopItems id="specials"/>
    </div>
  );
}
