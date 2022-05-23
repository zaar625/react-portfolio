import React, {useState} from 'react'
import './contactform.scss'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div className='contact-form col-10 cardstyle'>
        <div className="form-group">
            <label htmlFor="name">
                Your Name
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
            <label htmlFor="message">
                Your message
                <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </label>
        </div>
        <button type="submit">Send</button>
    </div>
  )
}

export default ContactForm