// styles
import './Grid.scss'

const calculateMoney = (amount) => {
  return (amount * 0.01).toFixed(2);;
}

export default function Grid({ content }) {

  const handleClick = (item) => {
    console.log(item)
  }

  return (
    <div className='grid_container'>
      {content.map(item => (
        <div className='grid_container_item' key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="grid_container_item_info">
            <h5>{item.title}</h5>
            <p>${calculateMoney(item.price)}</p>
            <button className='btn' onClick={() => handleClick(item)}>Add To Cart</button>
          </div>
        </div>
      ))}           
    </div>
  );
}
