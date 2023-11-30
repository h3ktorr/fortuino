import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Alert from '../components/Alert'
import { FaRegUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

const Register = () => {
  const [newAlert, setNewAlert] = useState({
    show: false,
    type: '',
    message: ''
  })
  const showAlert = (show = false, type='', msg='') => {
    setNewAlert({show, type, msg})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='page-center'>
      <form onSubmit={handleSubmit}>
       {newAlert.show && <Alert {...newAlert} removeAlert={showAlert}/>}
       <h2>Registration Form</h2>
       <div>
        <label htmlFor='firstName'><span><FaRegUser/></span>First Name</label>
        <input type='text' id='firstName' name='firstName' />
       </div>
       <div>
        <label htmlFor='lastName'><span><FaRegUser/></span>Last Name</label>
        <input type='text' id='lastName' name='lastName' />
       </div>
       <div>
        <label htmlFor='email'><span><FaEnvelope/></span>Email</label>
        <input type='email' id='email' name='email' />
       </div>
       <div>
        <label htmlFor='password'><span><FaLock/></span>Password</label>
        <input type='password' id='password' name='password' />
       </div>
       <div>
        <label htmlFor='re-password'><span><FaLock/></span>Re-type Password</label>
        <input type='password' id='re-password' name='re-password' />
       </div>
       <div>
        <select>
           <option>Select Region</option>
           <option>North America</option>
           <option>South America</option>
           <option>Europe</option>
           <option>Asia</option>
           <option>Africa</option>
        </select>
       </div>
       <div>
        <select>
           <option>Select Investment Category</option>
           <option>$200 and below</option>
           <option>$1000 to $201</option>
           <option>$10000 to $1001</option>
           <option>$100000 to $10001</option>
           <option>$$100001 and above</option>
        </select>
       </div>
      <button type='submit' className='btn'>Submit</button>
      </form>
      
    </section>
  )
}

export default Register
