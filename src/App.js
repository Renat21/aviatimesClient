import Header from './Components/Header/header';
import Overlay from './Components/Overlay/Overlay';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

import Profile from './Components/Profile';
import { useContext, useEffect} from 'react';
import {Context} from './index';
import { check } from './http/userApi';
import { observer } from 'mobx-react-lite';



import React from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer/Footer';
const App = observer((props) => {
    const {user}= useContext(Context);
    const [windowOpen, setWindowOpen] = React.useState(false);

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            console.log(data)
            user.setIsAuth(true)
        })
    }, [])



    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/" element={<Main windowOpen={windowOpen} setWindowOpen={setWindowOpen}/>}/>
                </Routes>
                <Footer/>
                <Overlay windowOpen={windowOpen}/>
            </div>
        </BrowserRouter>
    );
})

export default App;