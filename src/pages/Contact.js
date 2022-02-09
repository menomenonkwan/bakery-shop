import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Subscribe from '../components/Subscribe';

// styles
import './Contact.scss';

const options = [
  { value: 'catering', label: 'Catering' },
  { value: 'general', label: 'General Question' },
  { value: 'suggestions', label: 'Suggestions' }
]

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <section className='contact'>
      <div className="contact_heading">
        <h3>Contact Us</h3>
        <h1>Questions, comments, or happy thoughts?</h1>
      </div>
      <form onSubmit={handleSubmit} className="contact_form">
        <label className="contact_form_label">
          <span className="contact_form_title">Email:</span>
          <input 
            type="email"
            className="contact_form_input"
          />
        </label>
        <label className="contact_form_label">
          <span className="contact_form_title">Subject:</span>
          <Select options={options} />
        </label>
        <label className="contact_form_label">
          <span className="contact_form_title">Message:</span>
          <textarea className="contact_form_input"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      {location.pathname === '/contact' && <Subscribe />}
    </section>
  );
}