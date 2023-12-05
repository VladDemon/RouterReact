import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

function Register() {
  return (
  <>
  <Link to={'/'}>Home</Link>
  <div className='Register'>
    <div className='reg-form'>
      <span className='reg-form__span'>Register</span>
      <form className='form' action="#">
        <input placeholder='email' type="email" />
        <input type="password" />
        <button type="button">Register</button>
      </form>
    </div>
  </div>
  </>
  )
}

export default Register