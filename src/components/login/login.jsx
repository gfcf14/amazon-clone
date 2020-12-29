import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'helpers/firebase';
import { logoImage } from 'images';
import './login.scss';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.body.classList.toggle('login');

    return() => {
      document.body.classList.toggle('login');
    }
  }, []);

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logoImage} />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton'>SIGN IN</button>
        </form>

        <p>By signing in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  );
}