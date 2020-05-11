import React from 'react'
import './sign-in.styles.css'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-botton.component'
import {VERIFY_USER} from '../../configs/Events'
class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            room:''
        }
    }
    setUser = ({user,isUser}) => {
        console.log(user,isUser);
        if(isUser){
            alert('user already exist')
        }
        else{
            this.props.setUser(user)
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        if(!this.state.room || !this.state.name){event.preventDefault()}
        else{ 
            console.log(this.props)
            const {socket} =this.props
            const {name} = this.state
            socket.emit(VERIFY_USER,name,this.setUser)
        // this.props.history.push(`/chat`);
        
        }
    }
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput name="name" 
                    type="text" 
                    value={this.state.name} 
                    required  
                    handleChange={this.handleChange}
                    label="Name"
                    />
                    <FormInput name="room" 
                    type="text" 
                    value={this.state.room} 
                    required 
                    handleChange={this.handleChange}
                    label="room"
                    />
                    <div className="buttons">
                    <CustomButton onClick={this.handleSubmit} >Enter chat</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;