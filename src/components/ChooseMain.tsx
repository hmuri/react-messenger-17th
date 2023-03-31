import styled from 'styled-components';
import {useCallback, useState, useEffect} from 'react';
import {chatState, IChatTypes, sendState } from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';
import Ron from "../images/Ron.jpeg";
import Malfoy from "../images/Malfoy.jpeg";


const ProfileBox = styled.div`
    background-color : white;
    height : 4rem;
`
const Sender = styled.button<{isActive: boolean}>`
    width : 3rem;
    height : 3rem;
    border-radius : 100%;
    background-position : center;
    margin : 5px 10px 3px 10px;
    background-image : url(${props => props.isActive === true? Ron: Malfoy});

`
const Receiver = styled.button<{isActive: boolean}>`
    width : 3rem;
    height : 3rem;
    border-radius : 100%;
    background-position : center;
    margin : 5px 10px 3px 10px;
    background-image : url(${props => props.isActive === true? Malfoy: Ron});

`
const ChooseMain = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);

    const onClick_sender = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setChecked(true);
        setChats( chats=>
            chats.map((chat: IChatTypes)=>
                chat.checked===checked ? chat:chat,
            )
        );
    }

    const onClick_receiver = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setChecked(true);
        setChats( chats=>
            chats.map((chat: IChatTypes)=>
                chat.checked===checked ? {...chat, checked: !chat.checked}:{...chat, checked: !chat.checked},
            )
        );

        console.log(chats);
    }
        return (
            <ProfileBox>
                <Sender onClick={onClick_sender} isActive={checked}/>
                <Receiver onClick={onClick_receiver} isActive={checked}/>
            </ProfileBox>
        );
};

export default ChooseMain;