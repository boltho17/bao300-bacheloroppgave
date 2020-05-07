import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendedCard from './RecommendedCard';

export default class RecommendedProducts extends React.Component {

    recommendedList = [];

        render(){

            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
              };


            if (this.props.products) {
                this.recommendedList = this.props.products.reverse().map((product, index) => {
                    if(index < 9) {
                        return <div className="" key={index}><RecommendedCard product={product} onSelect={this.props.onSelect}/></div>
                    } else {
                        return null
                    }
                    
                });
            }
        return (
            <div className="container rp-container">
        <Slider {...settings}>
        
            
            {this.recommendedList}
           
          
        </Slider>
            </div>
        )
    }
}
