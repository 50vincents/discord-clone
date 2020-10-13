import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import axios from '../axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('87a6cf7034d1284a73ed', {
  cluster: 'us3'
});

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  /*
  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => 
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);
  */

  const getChannels = () => {
    axios.get('/get/channellist')
      .then((res) => {
        console.log(res.data);
        setChannels(res.data)
      })
  }

  useEffect(() => {
    getChannels()

    const channel = pusher.subscribe('channels');
    channel.bind('newChannel', function(data) {
      getChannels()
    });

  }, []);

  /*
  const handleAddChannel = () => {
    const channelName = prompt("Enter new channel name");

    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      });
    }
  };
*/

  const handleAddChannel = () => {
    const channelName = prompt("Enter new channel name");

    if (channelName) {
      axios.post('/new/channel', {
        channelName: channelName
      });
    }
  };

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

          <AddIcon className='sidebar-addChannel' onClick={handleAddChannel} />
        </div>

        <div className='sidebar-channelsList'>
          {channels.map((channel) => (
            <SidebarChannel key={channel.id} id={channel.id} channelName={channel.name}/>
          ))}
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
        <Avatar onClick={() => auth.signOut()} src={user.photo}/>
        <div className='sidebar-profileInfo'>
          <h3>
            {user.displayName}
          </h3>
          <p>#{user.uid.substring(0,5)}</p>
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
