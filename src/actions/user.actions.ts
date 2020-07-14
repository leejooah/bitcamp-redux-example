import {userConstants} from '../constants'
import {userService} from "../apis";

const userActions ={ //액션
    login //나머지는 내부에서만 쓴다.
}

function request(userid : string) : object{
    return {type : userConstants.LOGIN_REQUEST,userid}
}

function success(userid : string) : object{
    return {type : userConstants.LOGIN_SUCCESS, userid}
}
function failure(userid : string, error :string ) : object {
    return {type : userConstants.LOGIN_FAIL, userid, error}
}

function login(userid, password) { //액션생성기

    alert(`ID : ${userid}, PW : ${password}`)
    return dispatch => {
        dispatch(request(userid))
    }
}//request(userid)라는 단순 객체를 return하는 액션에 필요한 함수를 더한다 - 액션 생성자 내부에서 여러가지 작업을 할 수 있다.  이게 thunk인가...? 일단 이정도로 이해해야지

export default userActions