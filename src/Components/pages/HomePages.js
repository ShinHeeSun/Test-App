import React from 'react';
import Dhlqn from '../../img/외부.jpg';
import '../../App.css';

function HomePages() {
  return (
    <div className="d-flex">
      <div className="card " style={{ width: '18rem' }}>
        <a href="#" className="menu-link">
          <img src={Dhlqn} className="card-img-top " alt="..." />
          <span className="card-text">
            <h5 className="card-title">상품 이름</h5>
            <p>10,000원</p>
          </span>
        </a>
      </div>
      <div className="card  " style={{ width: '18rem' }}>
        <a href="#" className="menu-link ">
          <img src={Dhlqn} className="card-img-top" alt="..." />
          <span className="card-text">
            <h5 className="card-title">상품 이름</h5>
            <p>10,000원</p>
          </span>
        </a>
      </div>
    </div>
  );
}
export default HomePages;
