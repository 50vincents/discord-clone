import React from 'react'
import '../styles/Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import SidebarChannel from './SidebarChannel';

function Sidebar() {
  return (
    <div className='sidebar'>
      
      <div className='sidebar-top'>
        <h1>Discord</h1>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar-channels'>
        <div className='sidebar-channelsHeader'>
          <div className='sidebar-header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className='sidebar-addChannel' />
        </div>

        <div className='sidebar-channelsList'>
          <SidebarChannel />
        </div>

      </div>

      <div className='sidebar-voice'>
        <SignalCellularAltIcon 
          className='sidebar-voiceIcon'
          fontSize='large'
        />

        <div className='sidebar-voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className='sidebar-voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className='sidebar-profile'>
        <Avatar />
        <div className='sidebar-profileInfo'>
          <h3>@50vincents</h3>
          <p>ID</p>
        </div>

        <div className='sidebar-profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>   

    </div>
  )
}

export default Sidebar
