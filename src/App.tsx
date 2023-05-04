import styled from 'styled-components';
import { useLocation, Routes, Route } from 'react-router-dom';

import Main from './page/Main';
import List from './page/List';
import Room from './page/Room';
import Setting from './page/Setting';


const Container = styled.div`
  background-color: black;
`

function App() {
  const location = useLocation();
  return (
    <Container>
      <Routes>          
        <Route path="/" element={<Main/>}/>
        <Route path="/chatList" element={<List/>}/>
        <Route path="/chatRoom" element={<Room/>}/>          
        <Route path="/setting" element={<Setting/>}/>
      </Routes>
    </Container>
  );
}

export default App;
