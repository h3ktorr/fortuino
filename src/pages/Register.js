import React, {useState, useRef} from 'react'
import Select from 'react-select';
import {Link} from 'react-router-dom'
import Alert from '../components/Alert'
import { FaRegUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

const Register = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordRetypeRef = useRef(null)
  const investmentRef = useRef(null) 
  const regionalRef = useRef(null) 

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
    if(!firstNameRef.current.value){
      showAlert(true, 'danger', 'Enter First Name')
    }
    else if(!lastNameRef.current.value){
      showAlert(true, 'danger', 'Enter Last Name')
    }
    else if(!emailRef.current.value){
      showAlert(true, 'danger', 'Enter Email')
    }
    else if(!passwordRef.current.value){
      showAlert(true, 'danger', 'Enter Password')
    }
    else if(passwordRetypeRef.current.value !== passwordRef.current.value){
      showAlert(true, 'danger', 'Passwords do not match')
    }
    else if(investmentRef.current.value === investmentOptions[0]){
      showAlert(true, 'danger', 'Enter Investment Category')
    }
    else if(regionalRef.current.value === regionOptions[0]){
      showAlert(true, 'danger', 'Enter Region')
    }
    else{
      showAlert(true, 'success', 'Successfull')
      firstNameRef.current.value = ''
      lastNameRef.current.value = ''
      emailRef.current.value = ''
      passwordRef.current.value = ''
      passwordRetypeRef.current.value = ''
    }
  }

const investmentOptions = [
  {value: '', label: 'Select Investment Category'},
  {value: 'cookie', label: 'Cookie [$100 - $1000]'},
  {value: 'bread', label: 'Bread [$1000 - $10000]'},
  {value: 'block', label: 'Block [$10000 and above]'},
]

const regionOptions = [
  {value: '', label: 'Select Region'},
  {value: 'North America', label: 'North America'},
  {value: 'South America', label: 'South America'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Africa', label: 'Africa'},
]

  return (
    <section className="page-center">
      <form onSubmit={handleSubmit} className="form contact-form">
        <h2>Registration Form</h2>
        {newAlert.show && <Alert {...newAlert} removeAlert={showAlert} />}
        <div className="form-row">
          <label htmlFor="firstName" className="form-label">
            <span>
              <FaRegUser />
            </span>
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" ref={firstNameRef} />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            <span>
              <FaRegUser />
            </span>
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" ref={lastNameRef} />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            <span>
              <FaEnvelope />
            </span>
            Email
          </label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            <span>
              <FaLock />
            </span>
            Password
          </label>
          <input type="password" id="password" name="password" ref={passwordRef} />
        </div>
        <div className="form-row">
          <label htmlFor="re-password" className="form-label">
            <span>
              <FaLock />
            </span>
            Re-type Password
          </label>
          <input type="password" id="re-password" name="re-password" ref={passwordRetypeRef} />
        </div>

        <Select
          className="basic-single"
          classNamePrefix="select"
          value={investmentOptions[0]}
          name="color"
          options={investmentOptions}
          ref={investmentRef}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          value={regionOptions[0]}
          name="color"
          options={regionOptions}
          ref={regionalRef}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Register
