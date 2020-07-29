import React from 'react';
//프로퍼티로 number, onIncrease, onDecrease를 준다.

const CounterComponent  = ({number, onIncrease, onDecrease}) => { //바깥에서 정의해서 투입해준다 그 전에는 걍 component(dumb)
    return (
        <>
            <h1>숫자 : {number} </h1>
            <br/>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>

            </>
    );
};

export default CounterComponent;