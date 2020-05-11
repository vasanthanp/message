import React from 'react'
import io from 'socket.io-client'
import Chat from '../chat/Chat'
import {USER_CONNECTED,LOGOUT} from '../../configs/Events'
import SignIn from '../../components/sign-in/sign-in.component'
const ENDPOINT = 'localhost:4000'
class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            socket:null,
            user:null
        }
    }
        componentWillMount(){
            this.initSocket();
        }
        initSocket = () => {
            const socket  = io(ENDPOINT);
            socket.on('connect',()=>{
                console.log('connected');
                console.log(socket)
            })
            this.setState({socket})
        }
        setUser = (user) => {
            this.state.socket.emit(USER_CONNECTED,user);
            this.setState({user})
        }
        logout = ()=>{
            this.state.socket.emit(LOGOUT);
            this.setState({user:null})
        }
        render(){
            const {socket,user,logout} = this.state
            return(
                <div>
                {this.state.user?
                    <Chat logout={logout} user={user} socket={socket}/>
                    :
                    <SignIn  socket={socket}        setUser={this.setUser}/>
                }
                </div>
            )
        }
    }

export default Layout