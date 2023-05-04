import {useState} from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import bg1 from '../image/MainBG/1.png';
import bg2 from '../image/MainBG/2.jpeg';
import bg3 from '../image/MainBG/3.jpeg';
import bg4 from '../image/MainBG/4.jpeg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: black;
`
const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: flex;
`

const Main= () =>{
    const randomNum = Math.floor(Math.random()*4);
    const bgImgList = [
        {'id' : 0, imageUrl : bg1},
        {'id' : 1, imageUrl : bg2},
        {'id' : 2, imageUrl : bg3},
        {'id' : 3, imageUrl : bg4}
    ];

    return(
        <Container>
            <Background src={bgImgList[randomNum].imageUrl}>

            </Background>
        </Container>
    );

}

export default Main;