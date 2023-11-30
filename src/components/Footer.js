import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  const date = new Date()
  return (
    <>
    <section className='footer'>
      <h2>Fortuino</h2>
      <p>As a global investment manager and fiduciary to our clients, our purpose at Fortuino is to help everyone
    experience financial well-being. Since 2015, we've been leading provider of financial technology, and our clients
    turn
    to us for solution they need when plannibg their most important goals.
      </p>
      <h4>
        <Link to='/dist/index.html/terms' className='footer-terms'>
          Terms and Conditions 
        </Link>
      </h4>
    </section>
      <p className='footer-bottom page-center'>&copy; {date.getFullYear()} Fortuino, All rights reserved </p>
    </>
  )
}

export default Footer