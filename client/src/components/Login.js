import React from 'react'
import '../styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login-logo'>
        <img
          src='https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?w=980&ssl=1'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login;
