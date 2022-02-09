import { useState } from 'react';

// styles & icons
import './Subscribe.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);

    if(email.length < 1) { 
      setError('Please enter a valid email address');
      return;
    }
    setIsSignedUp(!isSignedUp);
    setEmail('Thank You');
  }

  return (
    <section className='subscribe'>
      <div className="subscribe_text">
        <h3>Subscribe</h3>
        <p>Stay up to date on what's happening at the SweetTreat Bakery. What's in stock? What's on sale? You'll be the first to know! We have seasonal deals and special tasting events available to our loyal customers. Stay in the loop.</p>
      </div>
      <div className="subscribe_container">
        <div className="subscribe_container_social">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>
        <form onSubmit={handleSignUp}>
          <label>
            <input 
              type="email"
              placeholder='Email Address'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              readOnly={isSignedUp}
              />
          </label>
          <button type="submit" disabled={isSignedUp} onClick={handleSignUp}>Sign Up</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </div>
    </section>
  );
}
