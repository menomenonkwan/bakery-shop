import { Link } from 'react-router-dom';

// styles & images
import './Hero.scss';
import heroBG from '../../assets/hero.jpg';

export default function Hero() {
  return (
    <div className='hero' style={{ backgroundImage: `url(${heroBG})` }}>
      <div className="hero_overlay">
        <div className="hero_overlay_content">
          <h1>Treat Yourself</h1>
          <p>Cupcakse, Donuts, Cookies, and more!</p>
          <div className="hero_overlay_content_controls">
            <Link to="/store" className='cta'>Shop</Link>
            <Link to="/#">More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
