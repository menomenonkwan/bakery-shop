import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

// styles & icons
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

export default function Cart() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCartContext();

  const calculateTotal = (item) => {
    return ((item.amount * item.price) * 0.01).toFixed(2);
  }

  return (
    <section>
      <h1>Cart</h1>
      <NavLink to="/our-menu">Back to Menu</NavLink>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.length >= 1 && 
        <div className="cart">
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Amount: {item.amount}</p>
              <p>Total: ${calculateTotal(item)}</p>
              <div className="cart_controls">
                <button className="btn" onClick={() => addToCart(item)}><FaAngleUp /></button>
                <button className="btn" onClick={() => removeFromCart(item.id)}><FaAngleDown /></button>
                <button className="btn" onClick={() => deleteFromCart(item.id)}><TiDelete /></button>
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
