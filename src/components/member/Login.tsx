import React, {Component} from "react";
import "../../assets/login.css"
import userActions from "../../actions/user.actions";
import {connect} from "react-redux"

class Login extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userid : '',
            password : '',
            name : '',
            submitted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name, value}  = e.target
        this.setState({[name] : value}) //동적으로 만든다. html5의 name이 parameter로 들어오는 느낌?? 이거 안하면 그냥 key값이 string으로 들어온다.
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted : true})
        const {userid, password} = this.state
        if (userid && password){
            this.props.login(userid,password)
        }
    }

    render() {
        const {userid, password, submitted }= this.state
        const helpBlock = {color : "red"}
        return <div>
            <h2>Login Form</h2>

            <form action="/action_page.php" method="post" onSubmit={this.handleSubmit}>
                <div className="imgcontainer">
                    <img id="avater" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar"
                         className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" value={userid}
                           onChange={this.handleChange} required/>
                    {
                        submitted && !userid && <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password" value={password}
                           onChange={this.handleChange} required/>
                    {
                        submitted && !password && <div style={helpBlock}> 비밀번호는 필수입력값입니다. </div>
                    }
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked name="remember"/> Remember me
                    </label>
                </div>

                <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    }

}
// function mapStateToProps(state) { //상태변수를 property로 연결한다.
//       //userActions가 return한 state가 들어간다
//     return  state.userReducers
// }

// const actionCreators =  { //이벤트가 발생하면 action을 dispatch해준다.
//     login :
// }
const connectedLoginPage = connect(state=>{return state.userReducers},  userActions.login)(Login) //store를 가져와서 사용하는 component
export {connectedLoginPage as Login}
