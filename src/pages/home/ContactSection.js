// styles
import Contact from '../Contact';
import './ContactSection.scss';

export default function ContactSection() {
  return (
    <section className='contact_section'>
      <div className='contact_section_location'>
        <h3>Visit Us</h3>
        <p>We are open 7 days a week from 8am until 8pm. Our friendly staff is always happy to take your orders and greet you with a smile. If our doors are closed, feel free to leave us an email or message and we'll get back to you as soon as we can</p>
        <div className="contact_section_location_address">
          <p>123 Fake St.</p>
          <p>Springfield, USA</p>
        </div>
        <p className="contact_section_location_phone">(555) - 555-1234</p>
        <p className="contact_section_location_email">sweettreatsbakery@email.com</p>
        <img src="https://source.unsplash.com/pMsvOrnIF3Y/" alt="Our smiling staff" />
      </div>
      
      <Contact />
    </section>
  );
}
