import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./login.scss"

export default function Login() {
  return (
    <div>
    <form className='form'>
        <p className="title">Login</p>
        <p className="message">Acesse sua conta para ver suas doações </p>
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
    <button className='submit'>Submit</button>
    </form>
    </div>
  )
}