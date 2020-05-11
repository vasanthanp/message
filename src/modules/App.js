import React, { useState } from 'react'
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'

import Chat from '../pages/chat/Chat'
import SignInPage from '../pages/sign-in/sign-in.page'
import Layout from '../pages/Layout/Layout'
const App = () => {
    return(
    <Router>
        <Layout/>
        {/* <Redirect from='/' to='/login'/>
        <Route path="/login" exact render={()=>name?<Redirect to='/chat'/>:<SignInPage getName = {(e)=>setName(e)}/>}/>
        <Route path="/chat" exact component={Chat}/>
        <Route path='*' /> */}
    </Router>
)}
export default App