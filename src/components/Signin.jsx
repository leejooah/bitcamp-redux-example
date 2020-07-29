import React, {useState, useEffect} from 'react';

const Info = () => {
    const [userid, setUserId] = useState(' ')
    const [password, setPassword] = useState(' ')

    useEffect(()=>{
        alert(`ID변화만 체크합니다 ${userid}`)
    },[])

    const onChangeName =e => setUserId(e.target.value)
    const onChangePassword = e =>setPassword(e.target.value)


    return (
        <>
        <div>
            <input name="userid" type="text" value={userid} onChange={onChangeName}/>
            <input name= "password" type="text" value={password} onChange={onChangePassword}/>
        </div>
        <div>
            <b>아이디 : </b> {userid} <br/>
            <b>비밀번호 : </b> {password} <br/>
        </div></>
    )
}

export default Info
