import React  from 'react'
import "./formulario.scss"

export default function Formulario() {
  return (
    <div>
    <form className='form'>
        <p className="title">Participe!</p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input required="" placeholder='' type="text" className='input' />
            <span>Nome</span>
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
    <label>
      <input required="" placeholder="" type="tel" class="input" />
      <span>Telefone/Celular</span>
    </label>
    <label>
      <input required="" placeholder="" type="text" class="input" />
      <span>CPF</span>
    </label>
    <label>
    <span>Qual o seu tipo sanguineo?</span>
    <select id="bloods">
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
      
    </label>
    <button className='submit'>Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </form>
    </div>
  )
}