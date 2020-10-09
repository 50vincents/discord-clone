import React from 'react'
import '../styles/Login.css';
import { Button } from '@material-ui/core';

function Login() {
  const signIn = () => {

  };

  return (
    <div className='login'>
      <div className='login-logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login;
