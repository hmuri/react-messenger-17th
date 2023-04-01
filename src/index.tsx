import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import WideBgImg from './images/WideBgImg.jpeg';

const Body = styled.body`
  background-image: url(${WideBgImg});
  background-size: cover;
  height: 65rem; ;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <Body>
      <App />
    </Body>
  </RecoilRoot>
);
