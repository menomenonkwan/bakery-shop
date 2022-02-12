import { menuItems } from '../assets/content';

// styles
import './TopItems.scss';

export default function TopItems({ id = null }) {
  return (
    <section id={id}>
      <h2 className='headline'>This month's specialties...</h2>
      <div className="container_grid">
        {menuItems.map(item => (
          <div 
            className="container_grid_image" 
            key={item.id}
            style={{ backgroundImage: `url(${item.image})`}}
          >
            <div className="image_content">
              <h3>{item.title}</h3>
              <a href={item.link} className='btn'>View</a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
