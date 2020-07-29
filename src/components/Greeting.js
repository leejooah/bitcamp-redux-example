import React ,{useState} from "react";
import {MDBBtn} from 'mdbreact'
const Greeting = () =>{
    const [message, setMessage] = useState("")
    const [color,setColor] = useState("")

    const onClickWelcome = ()=>setMessage("어서 오세요")
    const onClickBy = ()=> setMessage("안녕히 가세요")

    const changeToRed = ()=>setColor("red")
    const changeToGreen = ()=>setColor("green")
    const changeToBlue = ()=>setColor("blue")

    return (
        <>
            <MDBBtn color="default" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn color="default" onClick={onClickBy}>퇴장</MDBBtn>

            <h1 style={{color}}>{message}</h1>
            <MDBBtn color="danger" onClick={changeToRed}>적색 변환</MDBBtn>
            <MDBBtn color="success"  onClick={changeToGreen}>녹색 변환</MDBBtn>
            <MDBBtn color="primary"  onClick={changeToBlue}>청색 변환</MDBBtn>
        </>//fragment
    )
}
export default Greeting