import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { managers } from '../data'

const Manager = () => {
  const {id} = useParams()
  const manager = managers.find((person) => person.id == id)
  const {name, position, image, information} = manager;
  
  return (
    <section className='page-center'>
      <img src={image} alt='manager-image' />
      <h3>{name}</h3>
      <p>{information}</p>
    </section>
  )
}

export default Manager