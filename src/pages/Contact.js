import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <section className='page-center'>
      <h2>Contact us</h2>
      <div>
        <h3>How To Find Us</h3>
        <p>Traders Global Group Incorporated<br/>Registration Number: 1262665-0</p>
      </div>
      <div>
        <h3>Office Location</h3>
        <p>9131 Keele Street Vaughan, Ontario, ON L4K 2N, Canada</p>
      </div>
      <div>
        <h3>Email</h3>
        <p>fortuino.prontonmail.com</p>
      </div>
      <form>
        <h3>Get in Touch</h3>
        <div>
          <label htmlFor='name'>Your Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='email'>Your Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='message'>Your Message</label>
          <input type='text' name='message' id='message' />
        </div>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
