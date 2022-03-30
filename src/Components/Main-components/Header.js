import React from 'react';
import logo from '../../img/logo.png';
import '../../App.css'

function Header() {
  return (
    <header>
      <div className='join'>
        <p>회원가입</p>
        <p>로그인</p>
      </div>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    </header>
  );
}
export default Header;
