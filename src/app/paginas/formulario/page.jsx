import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./formulario.scss"

export default function Formulario() {
  return (
    <div>
    <form className='form'>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input required="" placeholder='' type="text" className='input' />
            <span>FirstName</span>
          </label>
          <label>
            <input required="" placeholder='' type="text" className='input' />
            <span>LastName</span>
          </label>
        </div>

      <label>
        <input required="" placeholder='' type="email" className='input'/>
        <span>email</span>
      </label>

      <label>
        <input required="" placeholder="" type="password" class="input" />
        <span>Password</span>
      </label>
    <label>
      <input required="" placeholder="" type="password" class="input" />
      <span>Confirm password</span>
    </label>
    <button className='submit'>Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </form>
    </div>
  )
}