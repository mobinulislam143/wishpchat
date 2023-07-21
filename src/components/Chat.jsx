import React, { useContext } from 'react';
import Add from '../../src/assets/add.png'
import Cam from '../../src/assets/cam.png'
import More from '../../src/assets/more.png'
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from './context/ChatContext';

function Chat(props) {
    const { data } = useContext(ChatContext)
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>{data.user?.displayName}</span>
                <div className='chatIcons'>
                    <img src={Cam} alt='' />
                    <img src={Add} alt='' />
                    <img src={More} alt='' />
                </div>
            </div>
            <Messages />
            <Input />

        </div>
    );
}

export default Chat;