import { HelpRounded, PeopleAltRounded, SearchRounded } from '@material-ui/icons';
import React from 'react'
import '../styles/ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


function ChatHeader() {
  return (
    <div className='chatHeader'>
      <div className='chatHeader-left'>
        <h3>
          <span className='chatHeader-hash'>#</span>
          Channel Name
        </h3>
      </div>      

      <div className='chatHeader-right'>
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className='chatHeader-search'>
          <input placeholder='Search' />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  )
}

export default ChatHeader
      