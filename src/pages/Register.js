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
    <section className="page-center">
      <form onSubmit={handleSubmit} className="form contact-form">
        {newAlert.show && <Alert {...newAlert} removeAlert={showAlert} />}
        <h2>Registration Form</h2>
        <div className="form-row">
          <label htmlFor="firstName" className="form-label">
            <span>
              <FaRegUser />
            </span>
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            <span>
              <FaRegUser />
            </span>
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            <span>
              <FaEnvelope />
            </span>
            Email
          </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            <span>
              <FaLock />
            </span>
            Password
          </label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-row">
          <label htmlFor="re-password" className="form-label">
            <span>
              <FaLock />
            </span>
            Re-type Password
          </label>
          <input type="password" id="re-password" name="re-password" />
        </div>
        <div className="">
          <select>
            <option>Select Region</option>
            <option>North America</option>
            <option>South America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Africa</option>
          </select>
        </div>
        <div className="">
          <select>
            <option>Select Investment Category</option>
            <option>$200 and below</option>
            <option>$1000 to $201</option>
            <option>$10000 to $1001</option>
            <option>$100000 to $10001</option>
            <option>$$100001 and above</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Register
