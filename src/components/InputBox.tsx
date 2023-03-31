import styled from 'styled-components';
import {useState, useCallback} from 'react';
import {inputState, chatState, IChatTypes} from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';

const Container = styled.div`
    display: flex;
    width: 99.5%;
    height: 4rem;
    background-color : black;
    border : solid 1px black;
    z-index: 5;
    bottom: 3rem;
`

const TextInput = styled.input`
    position : relative;
    width: 20rem;
    height: 75%;
    padding: 0 3px 0 3px;
    margin : 2% 3px 1px 5px;
    background-color: white;
    font-size: 13px;
    color: black;
    border: none;
    overflow: hidden;
`
const InputButton = styled.button`
    position : relative;
    background-color: ${props=> props.disabled === true ? "black" : "white"};
    font-size : 15px;
    width: 3rem;
    height: 75%;
    margin-left : 5px;
    text-align: center;
    border: solid 1px grey;
    border-radius : 20%;
    cursor : pointer;

`


const InputBox = () => {
    const [value, setValue] = useRecoilState<string>(inputState);
    const [button, setButton] = useState(true);
    const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);

    const addChat = (value: string) => {
        const chat: IChatTypes = {
            sender: 0,
            receiver: 1,
            checked: true,
            text : value,
        };
        setChats(chats.concat(chat));
        setValue('');
    }

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void =>{
        e.preventDefault();
        e.target.value.trim()=="" ? setButton(true) : setButton(false);
        setValue(e.target.value);
    }, [setValue]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        addChat(value);
        setValue('');
   //}, [addChat]);
    };
    
    return (
        <Container>
            <form onSubmit = {onSubmit}>
                <TextInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    ></TextInput>
                <InputButton disabled={button}>💫</InputButton>
            </form>
        </Container>
    );
}

export default InputBox;