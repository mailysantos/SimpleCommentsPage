import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.svg';

function Header() {
  return (
    <div className="postHeader">
      <img src={logo} />
      <p>
        Meu Perfil <img className="userProfile" src={user} />
      </p>
    </div>
  );
}

export default Header;
