import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {userDorm} from '../recoil';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import theme from "../style/theme";
import Navigation from '../components/Navigation';


const Container = styled.div<{dorm: string}>`
    width: 100%;
    height: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme, dorm })=> theme.color[dorm]}

`
const TitleBox = styled.div`
    display: flex;
    margin-top : 3rem;
    width : 100%;
    height: 5rem;
    color: white;
    justify-content: center;
    opacity: 0.8;
`

const TitleText = styled.div<{dorm: string}>`
    font-size: 4rem;
    color: dorm;
    text-align: center;
    font-family: 'Potter';
`
const TalkBox = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 26rem;
    height: 37rem;
    background-color: white;
    justify-content: center;
    opacity: 0.8;
    border-radius: 0.5rem;
`

const ListBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;

`


const List= () =>{
    const user = useRecoilValue(userDorm);


    return(
        <Container dorm={user.dorm}>
            <TitleBox>
                <TitleText dorm={user.dorm}>{user.name}</TitleText>
            </TitleBox>
            <TalkBox>
                <Navigation/>
                <ListBox/>
            </TalkBox>
        </Container>
    );
}

export default List;