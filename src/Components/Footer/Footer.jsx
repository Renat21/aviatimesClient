import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { useContext } from "react";
import {observer} from "mobx-react-lite";

const Footer = observer(() =>{


    return (
        <div>
         <footer style={{marginTop: "20px"}}>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <span class="logo_name">Aviatimes</span>
        </div>
        <div class="media-icons">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab"></i></a>
          <a href="#"><i class="fab"></i></a>
          <a href="#"><i class="fab"></i></a>
          <a href="#"><i class="fab"></i></a>
        </div>
      </div>
      
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">Aviatimes.</a>Все права защищены</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
        </div>
    );
})

export default Footer;