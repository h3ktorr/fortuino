import React from 'react'
import {Link} from 'react-router-dom'
import { managers } from '../data'

const Managers = () => {
  return (
    <section className='page-center'>
      <h2>Portfolio Managers</h2>
      <ul>
        {managers.map(manager => {
          const {id, name, image, position} = manager;
          return <li key={id}>
            <Link to={`/manager/${id}`}>
              <img src={image} />
              <h3>{name}, {position}</h3>
              <p>Read More</p> 
            </Link>
          </li>
        })}
      </ul>
      
    </section>
  )
}

export default Managers