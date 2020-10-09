import React from 'react'
import '../styles/Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />

      <div className='chat-messages'>
        <Message />
      </div>

      <div className='chat-input'>
        <AddCircleIcon fontSize='large' />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className='chat-inputButton' type='submit'>
            Send Message
          </button>
        </form>

        <div className='chat-inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GifIcon fontSize='large' />
          <EmojiEmotionsIcon fontSize='large' />
        </div>
      </div>

    </div>
  )
}

export default Chat
