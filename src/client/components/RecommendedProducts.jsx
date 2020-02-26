import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class RecommendedProducts extends React.Component { 

        render(){

            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              };
        return (
            <div className="rp-container">
                <h2 style={{textAlign: 'center'}}>Nytt og spennende</h2>
        <Slider {...settings}>
        <div>
            <h3>Dette skal liksom vere en slider med flere produkter</h3>
          </div>
          <div>
            <h3>her er det enda mere produkter</h3>
          </div>
          <div>
            <h3>masse flere kommer men det burde vere samlet</h3>
          </div>
          <div>
            <h3>produkter produkter produkter</h3>
          </div>
          <div>
            <h3>produkter produkter produkter</h3>
          </div>
          <div>
            <h3>produkter produkter produkter</h3>
          </div>
        </Slider>
            </div>
        )
    }
}