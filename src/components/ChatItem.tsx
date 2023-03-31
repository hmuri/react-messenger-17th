import styled from 'styled-components';
import {useCallback, useState} from 'react';
import { IChatTypes } from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';

const ChatBox = styled.div`
    display : flex;
    justify-content : flex-start;

`
const TextBox = styled.div<{isActive: boolean}>`
    background-color : ${props => props.isActive === true ? "yellow" : "white"};
    color: black;
    height : 1.5rem;
    font-size : 15px;
    width : max-content;
    margin-left : ${props => props.isActive === true ? "auto" : "7px"};
    margin-right : 10px;
    margin-top: 17px;
    margin-bottom: 3px;
    padding : 5px 7px 3px 6px;
    border-radius : 3%;
    
`
const Profile = styled.img<{isActive: boolean}>`
    width : 3rem;
    height : 3rem;
    border-radius : 100%;
    background-position : center;
    margin : 5px 10px 3px 10px;  
    display: ${props => props.isActive === true? "none" : "flex"};
`

const ChatItem= ({
    sender, receiver, checked, text
}: IChatTypes) => {
    console.log(checked);
    return(
        <ChatBox>
            <Profile 
                src = {'src/images/Ron.jpeg'}
                isActive={checked}
            />
            <TextBox isActive={checked}>{text}</TextBox>
        </ChatBox>
        
    );
}


export default ChatItem;