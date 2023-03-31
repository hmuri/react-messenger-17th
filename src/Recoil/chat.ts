import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

export interface IChatTypes{
    sender : number;
    receiver : number;
    checked : boolean;
    text : string;
}

export const inputState = atom<string>({
    key : 'inputState',
    default : '',
});

export const chatState = atom<IChatTypes[]>({
    key: 'chats',

    default: [
        {
            sender : 0,
            receiver : 1,
            checked : false,
            text : '왜들 그리 다운돼있어',
        },
        {
            sender : 0,
            receiver : 1,
            checked : false,
            text : '뭐가 문제야 Say Something',
        }
    ],
});

/*const {persistAtom} = recoilPersist({
    key: 'session',
    storage : sessionStorage
});*/
// 다음 과제 때 recoil Persist 공부해서 적용시켜보기
