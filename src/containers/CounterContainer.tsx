import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import CounterComponent from "./CounterComponent";
import {increase, decrease} from './counter.reducer'

const CounterContainer = () => {
    const number =useSelector(state=>state.counterReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()),[])
    const onDecrease = useCallback(()=>dispatch(decrease()),[])
    return (
        <CounterComponent number={number} onDecrease={onDecrease} onIncrease={onIncrease}/>
    )
}

export default CounterContainer