import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dhlqn from '../../img/외부.jpg';
import Soqn from '../../img/내부.jpg';
import '../../App.css';

function Slide() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img src={Dhlqn} className="img" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={Soqn} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={Dhlqn} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={Dhlqn} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={Dhlqn} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={Dhlqn} />
        </h3>
      </div>
    </Slider>
  );
}
export default Slide;
