import { Link } from 'react-router-dom';
// styles & images
import './Hero.scss';

export default function Hero({ content }) {
  const {title, subTitle, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink, image} = content;


  return (
    <div className='hero' style={{ backgroundImage: `url(${image})` }}>
      <div className="hero_overlay">
        <div className="hero_overlay_content">
          <h1>{title}</h1>
          {subTitle && <p>{subTitle}</p>}
          <div className="hero_overlay_content_controls">
            {ctaPrimaryLink && <Link to={ctaPrimaryLink} className='cta'>{ctaPrimary}</Link>}
            {ctaSecondaryLink && <a href={ctaSecondaryLink}>{ctaSecondary}</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

