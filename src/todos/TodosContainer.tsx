import React, {useCallback} from 'react';
import Todos from "./TodosComponent"
import {useSelector, useDispatch} from 'react-redux'
import {changeInput, insert, remove,toggle } from './todos.reducers'

const TodosContainer = () => {
    const todos = useSelector(state => state.todosReducer.todos)
    const input = useSelector(state => state.todosReducer.input)
    const dispatch = useDispatch()
    const onChangeInput = useCallback(()=>dispatch(changeInput()),[dispatch])
    const onInsert = useCallback(()=>dispatch(insert()),[dispatch])
    const onRemove = useCallback(()=>dispatch(remove()),[dispatch])
    const onToggle = useCallback(()=>dispatch(toggle()),[dispatch])
    return (
        <div>
            <Todos todos={todos} onChangeInput={onChangeInput} input={input} onInsert={onInsert} onRemove={onRemove} onToggle={onToggle}/>
            </div>
    );
};

export default TodosContainer;