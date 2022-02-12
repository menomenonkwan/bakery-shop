import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from '../hooks/useCartContext';

// styles & icons
import './Header.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
  });
  const { cart } = useCartContext();
  const navigate = useNavigate();


  useEffect(()=> {
    const handleResize = () => {
      setScreenWidth({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth.width > 768 && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [screenWidth.width, menuIsOpen]);

  const getTotalItems = () => {
    return cart.reduce((theTotal, theItem) => {
      return theTotal + theItem.amount;
    }, 0);
  }

  
  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const handleClick = () => {
    handleMenuToggle();
    navigate("/cart");
  }

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_content_brand">
          <Link to="bakery-shop/">SweetTreats</Link>
          <h6>Bakery</h6>
        </div>
        <nav className={`header_content_nav ${menuIsOpen ? 'isOpen' : ''}`}>
          <ul>
            <li>
              <NavLink to="/our-menu" onClick={handleMenuToggle}>
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-story" onClick={handleMenuToggle}>
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleMenuToggle}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="header_badge">
            {cart.length > 0 && 
            <div className="header_badge_notification"><p>{getTotalItems()}</p></div>
            }
            <button onClick={handleClick}>Cart <FaOpencart /></button>
          </div>
        </nav>

        <div className="header_content_toggle">
          {menuIsOpen 
            ? <AiOutlineClose onClick={handleMenuToggle} />
            : <BiMenuAltRight onClick={handleMenuToggle} />
          }
          </div>
      </div>
    </header>
  );
}
