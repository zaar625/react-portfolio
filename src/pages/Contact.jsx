import React from 'react'
import ContactForm from '../components/contactForm/ContactForm'
import ContactInfo from '../components/contactInfo/ContactInfo'
import ContactMap from '../components/map/ContactMap'
import Navbar from '../components/navbar/Navbar'

const Contact = () => {
  return (
      <>
        <Navbar/>
        <div className='contact'>
            <div className='contact__top'>
                <div className='contact__left col-6 '>
                    <ContactInfo/>
                </div>
                <div className='contact__right col-6 '>
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