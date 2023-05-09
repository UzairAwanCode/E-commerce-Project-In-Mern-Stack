import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1lxcfa', 'template_ft77iyr', form.current, 'VsyoxodpBexsV53B2')
      .then((result) => {
          console.log(result.text);
          alert("Message Send Successfully!!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          console.log("Error")
      });
  };
  return (
    <>
      <section className='container'>
        <h1 className='title'>Contact Us</h1>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form row">
              <div className="form-field col-lg-6">
                <input type="text" id='email' className='input-text' name='user_name' />
                <label htmlFor="email" className='label'>Name</label>
              </div>
              <div className="form-field col-lg-6">
                <input type="email" id='email' className='input-text' name='user_email' />
                <label htmlFor="email" className='label'>Email</label>
              </div>
              <div className="form-field col-lg-6">
                <input type="text" id='email' className='input-text' name='user_subject' />
                <label htmlFor="email" className='label'>Subject</label>
              </div>
              <div className="form-field col-lg-12">
                <input type="text" id='email' className='input-text' name='message' />
                <label htmlFor="email" className='label'>Message(Optional)</label>
              </div>
              <div className="form-field col-lg-12">
                <input className='submit-btn' type="submit" value="Send" />
              </div>
            </div>
          </form>

        </div>
      </section>
    </>
  )
}

export default Contact
