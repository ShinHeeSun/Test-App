import React from 'react';
import '../../App.css';

function Nav() {
  return (
    <nav>
      <ol className="big-menu">
        <li>
          <span className="buger1">
            <span className="buger"></span>
            <span className="buger"></span>
            <span className="buger"></span>
          </span>
          전체 카테고리
        </li>
        <li className="oneday-menu">ONE-DAY 특가</li>

        <li>지역 특산품</li>
        <li>Hot</li>
        <li>사전예약</li>
        <span className="search">
          <input type="text" />
        </span>
      </ol>
      <span className="menu-list">
        <ol>
          <li>ONE-DAY 특가</li>
          <li>지역 특산품</li>
          <li>Hot</li>
          <li>사전예약</li>
        </ol>
        <ol>
          <li>ONE-DAY 특가</li>
          <li>지역 특산품</li>
          <li>Hot</li>
          <li>사전예약</li>
        </ol>
      </span>
    </nav>
  );
}
export default Nav;
