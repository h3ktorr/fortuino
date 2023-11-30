import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../data'
import { useGlobalContext } from '../context'
import fortuino from '../images/fortuino.png'

const Navbar = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <nav className='navbar'>
      <div className='nav-center'>
       <div className='nav-header'>
        <Link to='/'>
          <img src={fortuino} alt='logo' className='logo' />
        </Link>
        <button className='btn nav-toggle' onClick={openSidebar} >
          <FaBars />
        </button>
       </div>
        <ul className='nav-links'>
          {links.map(link => {
            const {id, name, route} = link;
            return <li key={id}>
              <Link to={route}>
                {name}
              </Link>
            </li> 
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
