import React, {useState} from 'react';
import Signin from './Signin'
const HideTest :React.FC = () => {
    const [visible, setVisible] = useState(false)


    return (
        <>
            <button onClick={()=>setVisible(!visible)}>보이기</button>
            {visible ? '보이기' : '숨기기'}
            <hr/>
            {visible && <Signin/>}
        </>
    );
};

export default HideTest ;