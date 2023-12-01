import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <section className="page-center contact-container">
      <article className="contact-info">
        <h2>Contact us</h2>
        <div>
          <h3>How To Find Us</h3>
          <p>
            Traders Global Group Incorporated
            <br />
            Registration Number: 1262665-0
          </p>
        </div>
        <div>
          <h3>Office Location</h3>
          <p>9131 Keele Street Vaughan, Ontario, ON L4K 2N, Canada</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>fortuino.prontonmail.com</p>
        </div>
      </article>
      <form className="form contact-form">
        <h3>Get in Touch</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <input type="text" name="message" id="message" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact
