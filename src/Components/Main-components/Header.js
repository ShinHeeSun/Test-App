import React from 'react';
import logo from '../../img/logo.png';
import '../../App.css'
import {  Link } from 'react-router-dom';


function Header() {
  return (

    <header>
      <div className='join'>
        <p>회원가입</p>  {/* 링크 태그 넣어야함 */}
        <Link to="/Login-pages" exact> <p> 로그인</p></Link>
      </div>
      <div className='logo'>
      <Link to="/" exact> <img src={logo} alt="" /></Link>
      </div>
    </header>

  );
}
export default Header;
