import styled from 'styled-components';
import {useCallback, useState} from 'react';
import {chatState, IChatTypes } from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';
import ChatItem from './ChatItem';

const ProfileBox = styled.div`
`
const Character1 = styled.div`
`
const Character2 = styled.div`
`
const ChooseMain = (): JSX.Element => {
    const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);
        return (
            <ProfileBox>
                <Character1/>
                <Character2/>
            </ProfileBox>
        );
};

export default ChooseMain;