import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { useContext } from "react";
import {observer} from "mobx-react-lite";
import jwt_decode from 'jwt-decode';


const Header = observer(() =>{
    const {user} = useContext(Context);
    let navigate = useNavigate();


    const logOut = () =>{
        user.setUser({});
        user.setIsAuth(false);
        console.log(jwt_decode(localStorage.getItem('token')))
        localStorage.removeItem('token');
    }

    return (
        <div>
<section class="ftco-section">

<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar" style={{backgroundColor: '#BF6B30'}}>
<div class="container" >
  <a class="navbar-brand" href="/">Aviatimes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fa fa-bars"></span> Menu
  </button>

  <div class="collapse navbar-collapse" id="ftco-nav" >
    <ul class="navbar-nav ml-auto">
    {user.isAuth &&
                            <li class="nav-item active">
                                <NavLink className='nav-link' to="/profile">Профиль</NavLink>
                            </li>
                        }
                        {/* {user.isAuth &&
                            <li class="nav-item">
                                <NavLink className='nav-link' to="/info">О нас</NavLink>
                            </li>
                        } */}
                        {!user.isAuth &&
                            <li class="nav-item">
                                <NavLink className='nav-link' to="/login">Авторизация</NavLink>
                            </li>
                        }
                        {user.isAuth &&
                            <li class="nav-item">
                                <NavLink className='nav-link' onClick={()=>logOut()} to="/login">{`Выйти: ${jwt_decode(localStorage.getItem('token')).sub}`}</NavLink>
                            </li>
                        }
    </ul>
  </div>
</div>
</nav>

</section>
</div>
    );
})

export default Header;