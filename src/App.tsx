import { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Main from './pages/Main';
import UserList from './pages/UserList';
import ChatRoom from './pages/ChatRoom';
import { chatState, IChatTypes } from './Recoil/chat';

const Container = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  height: 47rem;
  padding-top: 7rem;
  flex-direction: column;
  border: solid 1px black;
`;

/*const ChatBox = styled.div`
  background-image: url(${HwBgImg});
  background-size: cover;
  width: 100%;
  height: 42rem;
  overflow: auto;
  padding-top: 0.7rem;
`;
*/
// 확장할 떄 App.tsx => ./pages/ChatRoom.tsx로 옮기기

function App() {
  const location = useLocation();

  const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);
  return (
    <Container>
      <Route path="/" element={<Main />}></Route>
      <Route path="/chatroom/*" element={<ChatRoom />}></Route>
      <Route path="/userList/*" element={<UserList />}></Route>
    </Container>
  );
}

export default App;
