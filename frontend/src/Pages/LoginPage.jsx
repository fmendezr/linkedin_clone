import React, {useContext, useState} from 'react';

import AuthContext from '../Context/AuthContext'

import '../Sass/LoginPage.scss';

import linkedinLogo from '../Assets/linkedinLogo.png';

const LoginPage = () => {

  let { loginUser } = useContext(AuthContext)

  return (
    <div className='login-wrapper'>
        <img src={linkedinLogo} alt='linkedin logo' className='linkedin-logo'/>
        <h1 className='heading'>Sign In</h1>
        <form onSubmit={loginUser} className='auth-inputs'>
            <input type='text' name='email' placeholder='Enter your Email' className='common-input'/>
            <input type='password' name='password' placeholder='"Enter Password' className='common-input'/>
            <button type='submit' className='login-btn'>Log in to Linkedin</button>
        </form>
    </div>
  )
}

export default LoginPage