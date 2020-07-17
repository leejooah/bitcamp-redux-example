import {userConstants} from '../constants'

let user = JSON.parse(<string>sessionStorage.getItem('user' ))
const initialState = user ? {user} : {} //초기화; 있으면 있는거 쓰고 없으면 빈거 하나 새로 만들어라
export function userReducers(state = initialState, action) { //prop로 두개를 던지는데 state와 action
    switch (action.type) {
        case  userConstants.LOGIN_REQUEST:
            return {
                user : action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                user : action.user
            }
        case userConstants.LOGIN_FAIL:
            return {

            }
        case "join" :
            return {
                user : action.user
            }
        default:
            return state
    }
}