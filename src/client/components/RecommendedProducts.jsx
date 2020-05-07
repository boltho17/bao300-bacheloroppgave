import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendedCard from './RecommendedCard';

export default class RecommendedProducts extends React.Component { 

    constructor(props) {
        super(props)
        console.log(props)
    }

     
    recommendedList = [];

   /**
    * <div className="">
            {this.recommendedList}
            <div className="recommended-product-card" onClick={() => this.props.onSelect(this.props.products[0])}> 
                <div className="recommended-product-picture" style={{backgroundImage: `url("${"https://i.pinimg.com/736x/f6/c1/86/f6c18634aade9c5b4d06e59705e56702.jpg"}")`}}/>
                <p className="recommended-product-text-1">{this.props.products[0].vendor.displayName}</p>
                <div className="recommended-product-center-line"></div>
                <h3 className="recommended-product-text-2">{this.props.products[0].title}</h3>
                <p className="recommended-product-text-3">Smak av: melkesjokolade, hasselnøtt og appelsin</p>
                <div className="recommended-product-buy-button">Kjøp</div>
            </div>
        </div>
    */

        render(){

            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
              };

            const styles = { 
                card: "recommended-product-card",
                pictures: "recommended-product-picture",
                text1: "recommended-product-text-1",
                text2: "recommended-product-text-2",
                text3: "recommended-product-text-3",
                button: "recommended-product-buy-button"
            }

            if (this.props.products) {
                this.recommendedList = this.props.products.reverse().map((product, index) => {
                    if(index < 9) {
                        return <div className="" key={index}><RecommendedCard product={product} onSelect={this.props.onSelect}/></div>
                    } else {
                        return
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