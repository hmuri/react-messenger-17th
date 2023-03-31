import styled from 'styled-components';
import {useCallback, useState} from 'react';
import {chatState, IChatTypes } from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';
import ChatItem from './ChatItem';



const ChatList = (): JSX.Element => {
    const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);
            return (
                <div>
                {chats.map((chat: IChatTypes)=>{
                const {sender, receiver, text, checked} = chat;
                return(
                <ChatItem
                    sender = {sender}
                    receiver = {receiver}
                    checked = {checked}
                    text = {text}
                />
                );
                })}
                </div>
            );
};

export default ChatList;