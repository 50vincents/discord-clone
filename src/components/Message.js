import React from 'react'
import '../styles/Message.css';
import { Avatar } from '@material-ui/core';

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message-info'>
        <h4>USER
          <span className='message-timestamp'>timestamp</span>
        </h4>

        <p>message</p>
      </div>     
    </div>
  )
}

export default Message
