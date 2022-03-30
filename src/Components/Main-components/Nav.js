import React from 'react';

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <div className="buger1">
            <span className="buger"></span>
            <span className="buger"></span>
            <span className="buger"></span>
          </div>
          전체 카테고리
        </li>
        <li>ONE-DAY 특가</li>
        <li>지역 특산품</li>
        <li>Hot</li>
        <li>사전예약</li>
        <span className="search">
          {' '}
          <input type="text" />
        </span>
      </ol>
    </nav>
  );
}
export default Nav;
