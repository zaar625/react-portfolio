import React, {useEffect}from 'react'
import scrollreveal from 'scrollreveal'
import ContactForm from '../components/contactForm/ContactForm'
import ContactInfo from '../components/contactInfo/ContactInfo'
import ContactMap from '../components/map/ContactMap'
import Navbar from '../components/navbar/Navbar'

const Contact = () => {
    useEffect(() => {
        const sr = scrollreveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: false,
        });
        sr.reveal(
        `
            .contact__header,
            .contact__left,
            .contact__right
        `,
          {
            opacity: 0,
            interval: 300,
          }
        );
      }, []);
  return (
      <>
        <Navbar/>
        <div className='contact'>
            <div className='contact__header'>
                <p>get in touch</p>
                <h1>Contact</h1>
            </div>
            <div className='contact__top'>
                <div className='contact__left col-6 col-md-12 '>
                    <ContactInfo/>
                </div>
                <div className='contact__right col-6 col-md-12 '>
                    <ContactForm/>
                </div>
            </div>
            <div className='contact__bottom col-12 cardstyle'>
                <ContactMap/>
            </div>
        </div>
      </>
  )
}

export default Contact