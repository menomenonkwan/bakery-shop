import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

// styles & icons
import './Cart.scss';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

const CartCard = ({ item }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useCartContext();

  const calculateSubTotal = () => {
    return ((item.amount * item.price) * 0.01).toFixed(2);
  }

  return (
    <div className="cart_list_card">
      <img src={item.image} alt={item.title} />
      <div className="cart_list_card_info">
        <h3>{item.title}</h3>
        <p>Amount: {item.amount}</p>
        <p>Total: ${calculateSubTotal()}</p>
      </div>
      <div className="cart_list_card_controls">
        <button className="btn" onClick={() => addToCart(item)}><FaAngleUp /></button>
        <button className="btn" onClick={() => removeFromCart(item.id)}><FaAngleDown /></button>
        <button className="btn" onClick={() => deleteFromCart(item.id)}><TiDelete /></button>
      </div>
    </div>
  );
}

export default function Cart() {
  const [checkedOut, setCheckedOut] = useState(false);
  const { cart, emptyCart } = useCartContext();
  const navigate = useNavigate();

  const calculateTotal = () => {
    const total = cart.reduce((tot, acc) => {
      return tot + (acc.amount * acc.price);
    }, 0);

    return (total * 0.01).toFixed(2);
  }

  const handleCheckout = () => {
    setCheckedOut(true);
    
    setTimeout(() => {
      emptyCart();
      navigate('bakery-shop/');
    }, 2500);
  }

  return (
    <section className="cart_page">
      <div className="cart_page_heading">
        <h2>Your Shopping Cart</h2>
        <NavLink to="/our-menu">Back to the Menu</NavLink>
      </div>
      {cart.length === 0 && <p className="empty">Your cart is empty</p>}
      {checkedOut && <p className="empty">Thank You for your order...</p>}
      {cart.length >= 1 && !checkedOut &&
        <div className="cart">
          <div className="cart_list">
            {cart.map(item => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          <div className="cart_checkout">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="btn" onClick={handleCheckout}>Checkout</button>
          </div>  
        </div>
      }
    </section>
  );
}
