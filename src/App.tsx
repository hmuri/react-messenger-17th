import {useState} from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import ChatList from './components/ChatList';
import {useRecoilState} from 'recoil';
import { chatState, IChatTypes } from './Recoil/chat';
import ChooseMain from './components/ChooseMain';



const Container = styled.div`
    background-color: grey;
    display: flex;
    width: 25rem;
    margin: auto;
    height: 40rem;

    flex-direction : column;
    border : solid 1px black;
`

const ChatBox = styled.div`
    background-color: #9bbbd4;
    width : 100%;
    height: 42rem;
    overflow: auto;
`

// 확장할 떄 App.tsx => ./pages/ChatRoom.tsx로 옮기기


function App() {
  const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);
  /*const addChatList = (id: number, text : string) => {
    const chat ={
      id : getId,
      text : text
    }
    setChats(chats => chats.concat(chat));
    getId++;
  };*/
  return (
    <Container>
      <ChooseMain/>
      <ChatBox>
      <ChatList/>
      </ChatBox>
      <InputBox/>
    </Container>
  );
}

export default App;
