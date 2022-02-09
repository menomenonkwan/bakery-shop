import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// styles & icons
import './Header.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
  })
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

  
  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const handleClick = () => {
    handleMenuToggle();
    navigate("/store");
  }

  return (
    <header className="header">
      <div className="header_content">
        <Link to="/" className="header_content_brand">SweetTreats</Link>
        <nav className={`header_content_nav ${menuIsOpen ? 'isOpen' : ''}`}>
          <ul>
            <li>
              <NavLink to="/page-one" onClick={handleMenuToggle}>
                PageOne
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-two" onClick={handleMenuToggle}>
                PageTwo
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-three" onClick={handleMenuToggle}>
                PageThree
              </NavLink>
            </li>
          </ul>
          <button onClick={handleClick}>Shop</button>
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