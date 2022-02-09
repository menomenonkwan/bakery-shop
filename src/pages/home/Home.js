import Hero from "./Hero";
import TopItems from "./TopItems";

// styles & images
import './Home.scss';

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <section>
        <div className="container_grid">
          <div className="container_grid_image">
            <img src="https://source.unsplash.com/nXKWLn8y9qE/" alt="" />
            <h3>Cupcakes</h3>
          </div>

          <div className="container_grid_image">
            <img src="https://source.unsplash.com/qZ6uvJHLHFc/" alt="" />
            <h3>Donuts</h3>
          </div>
          <div className="container_grid_image">
            <img src="https://source.unsplash.com/bzLhhI3MpYY/" alt="" />
            <h3>Cookies</h3>
          </div>
        </div>
      </section> */}

      <TopItems />
      <section>
        <h1>About/Standards</h1>
      </section>
      <section>
        <h1>Baking Video</h1>
      </section>
      <section>
        <h1>Contact/Location</h1>
      </section>
      <section>
        <h1>Subscribe</h1>
      </section>

    </div>
  );
}
