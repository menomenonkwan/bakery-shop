import { useCartContext } from '../hooks/useCartContext';

// styles & icons
import './Grid.scss';

const calculateMoney = (amount) => {
  return (amount * 0.01).toFixed(2);
}

export default function Grid({ content }) {
  const { addToCart } = useCartContext();

  return (
    <div className='grid_container'>
      {content.map(item => (
        <div className='grid_container_item' key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="grid_container_item_info">
            <h5>{item.title}</h5>
            <p>${calculateMoney(item.price)}</p>
            <button className='btn' onClick={() => addToCart(item)}>Add One</button>
          </div>
        </div>
      ))}           
    </div>
  );
}
