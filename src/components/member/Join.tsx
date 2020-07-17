import React, {Component} from 'react';
import userActions from "../../actions/user.actions";
import {connect} from "react-redux"

class Join extends Component<any, any> {
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
        const {name, value} = e.target
        this.setState({[name] : value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted : true})
        const {userid, password,name}= this.state
        if (userid && password && name){
            this.props.join(userid,password,name)
        }
    }
    render() {
        const {userid, password, name, submitted} =this.state
        const helpBlock = {color : "red"}
        return (
            <form action="/action_page.php" style={{border:"1px solid #ccc"}} onSubmit={this.handleSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                        <label htmlFor="email"><b>Userid</b></label>
                        <input type="text" placeholder="Enter userid" name="userid" value={userid} required onChange={this.handleChange}/>
                    {
                        submitted && !userid && <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" value={password} required onChange={this.handleChange}/>
                    {
                        submitted && !password && <div style={helpBlock}>비밀번호는 필수입력값입니다.</div>
                    }
                                <label htmlFor="psw-repeat"><b>Name</b></label>
                                <input type="password" placeholder="Enter name" name="name" value={name} required onChange={this.handleChange}/>
                    {
                        submitted && !name && <div style={helpBlock}>이름은 필수입력값입니다.</div>
                    }
                                    <label>
                                        <input type="checkbox" checked name="remember"
                                               style={{marginBottom:"15px"}}/> Remember me
                                    </label>

                                    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms
                                        & Privacy</a>.</p>

                                    <div className="clearfix">
                                        <button type="button" className="cancelbtn">Cancel</button>
                                        <button type="submit" className="signupbtn">Sign Up</button>
                                    </div>
                </div>
            </form>

    )
    }
}

function mapStateToProps(x) {
    const {joinIn} = x.userReducers
    return {joinIn}
}
const actionCreator = {
    join : userActions.join
}
const connectedJoinPage = connect(mapStateToProps, actionCreator)(Join)
export {connectedJoinPage as Join}