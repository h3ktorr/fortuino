import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, informations } from '../data'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  
  return (
    <div className={isSidebarOpen? 'sidebar-wrapper show' : 'sidebar-wrapper'  }>
      <aside className='sidebar'>
        <button className='btn close-sidebar' onClick={closeSidebar}>
          <FaTimes />
        </button>
        
        <ul className='sidebar-links'>
          {links.map(link => {
            const {id, name, route} = link;
            return <li key={id} className='sidebar-link' >
              <Link to={route} onClick={closeSidebar}>
                {name}
              </Link>
            </li> 
          })}
        </ul>

        <ul>
          {informations.map(item => {
            const {id, name, route} = item;
            return <li key={id} className='sidebar-link'>
              <Link to={route} onClick={closeSidebar}>
                {name}
              </Link>
            </li>
          })}
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
