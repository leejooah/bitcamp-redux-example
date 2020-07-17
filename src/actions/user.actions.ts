import {userConstants} from '../constants'
import {userService} from "../apis";

const userActions ={ //액션
    login, join //나머지는 내부에서만 쓴다.
}
function join(userid :string, password : string, name: string) {
    alert(`ID : ${userid}, PW : ${password} , NAME : ${name}`)

}

function login(userid, password) { //액션생성기

    alert(`ID : ${userid}, PW : ${password}`)
    userService.loginService(userid, password)
    return dispatch => {
        dispatch(request(userid))
    }
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user}}
}//request(userid)라는 단순 객체를 return하는 액션에 필요한 함수를 더한다 - 액션 생성자 내부에서 여러가지 작업을 할 수 있다.  이게 thunk인가...? 일단 이정도로 이해해야지

export default userActions