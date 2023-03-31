import styled from 'styled-components';
import {useState, useCallback} from 'react';
import {inputState, chatState, IChatTypes} from '../Recoil/chat';
import {useRecoilState, useRecoilValue} from 'recoil';

const Container = styled.div`
    width: 100%;
    height: 3rem;
    background-color : grey;
    border : solid 1px black;
    z-index: 5;
    bottom: 3rem;
    display: flex;
`

const TextInput = styled.input`
    position: relative;
    width: 85%;
    height: 95%;
    margin-left: 3px;
    background-color: white;
    font-size: 13px;
    color: black;
    border: solid 1px black;
    overflow: hidden;
`
const InputButton = styled.button`
    position: relative;
    background-color: ${props=> props.disabled === true ? "gray" : "white"};
    font-size : 30px;
    width: 13%;
    height: 97%;
    text-align: center;
    border: solid 1px black;
    border: solid 0.5px white;
    cursor : pointer;

`


const InputBox = () => {
    const [value, setValue] = useRecoilState<string>(inputState);
    const [button, setButton] = useState(true);
    const [chats, setChats] = useRecoilState<IChatTypes[]>(chatState);

    /*const addChat = useCallback(() :void =>{
        const chat: IChatTypes = {
            sender: 0,
            receiver: 1,
            text : value,
        };
    setChats([...chats, chat]);
    setValue('');
    }, [value, setValue, setChats, chats]);*/

    const addChat = (value: string) => {
        const chat: IChatTypes = {
            sender: 0,
            receiver: 1,
            text : value,
        };
        setChats(chats.concat(chat));
        setValue('');
    }

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void =>{
        setValue(e.target.value);
        e.target.value.trim()!="" ? setButton(false) : setButton(true);
    }, [setValue]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        addChat(value);   
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