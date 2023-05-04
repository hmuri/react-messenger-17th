import {useState} from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {useLocation} from 'react-router-dom';
import theme from "../style/theme";

const Container = styled.div<{dorm: string}>`
    width: 100%;
    height: 55rem;
    display: flex;
    justify-content: center;
    background-color: ${({ theme, dorm })=> theme.color[dorm]}

`


const List= () =>{
    const location = useLocation();
    const state = location.state as {id: string; dorm: string};
    const id = state.id;
    const dorm = state.dorm;
    return(
        <Container dorm={dorm}/>
    );
}

export default List;