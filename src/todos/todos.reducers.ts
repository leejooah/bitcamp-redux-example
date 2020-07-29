import {createAction, handleActions} from 'redux-actions'
const CHANGE_INPUT = "todes/CHANGE_INPUT"
const INSERT= "todes/INSERT"
const TOGGLE = "todes/TOGGLE"
const REMOVE = "todes/REMOVE"

export const changeInput = createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const remove = createAction(REMOVE)
export const toggle = createAction(REMOVE)

const initState = {todos : {}, input : ""}

const todosReducer = handleActions(
    {
    [CHANGE_INPUT] : (state, action)=>({todos: {}, input : ""}),
    [INSERT] : (state, action)=>({todos: {}, input : ""}),
    [TOGGLE] : (state, action)=>({todos: {}, input : ""}),
    [REMOVE] : (state, action)=>({todos: {}, input : ""}),
},initState)

export default todosReducer