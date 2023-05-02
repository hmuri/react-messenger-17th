import { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../components/InputBox';
import ChatList from '../components/ChatList';
import { useRecoilState } from 'recoil';
import { chatState, IChatTypes } from '../Recoil/chat';
import ChooseMain from '../components/ChooseMain';
import HwBgImg from '../images/HwBgImg.png';
import App from '../App';

const Container = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  height: 47rem;
  padding-top: 7rem;
  flex-direction: column;
  border: solid 1px black;
`;

const ChatBox = styled.div`
  background-image: url(${HwBgImg});
  background-size: cover;
  width: 100%;
  height: 42rem;
  overflow: auto;
  padding-top: 0.7rem;
`;

// 확장할 떄 App.tsx => ./pages/ChatRoom.tsx로 옮기기

function ChatRoom() {
  const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);
  return (
    <Container>
      <ChooseMain />
      <ChatBox>
        <ChatList />
      </ChatBox>
      <InputBox />
    </Container>
  );
}

export default App;
