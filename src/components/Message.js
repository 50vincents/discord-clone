import React from 'react'
import '../styles/Message.css';
import { Avatar } from '@material-ui/core';

function Message({timestamp, message, user}) {
  return (
    <div className='message'>
      <Avatar src={user.photo}/>
      <div className='message-info'>
        <h4>{user.displayName}
          <span className='message-timestamp'>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>     
    </div>
  )
}

export default Message
