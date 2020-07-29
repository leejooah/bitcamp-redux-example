import {combineReducers} from 'redux'
import counterReducer from "../containers/counter.reducer"
import todosReducer from '../todos/todos.reducers'
const rootReducer = combineReducers({
    counterReducer,
    todosReducer
})
export default rootReducer