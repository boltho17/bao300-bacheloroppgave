import React from 'react';

import RecommendedProducts from '../components/RecommendedProducts';


class LandingPage extends React.Component {

    render() {
        return ( 
            <div className="">

                <div className="image-container" >
                    <div className="container">
                        <div className="row">
                            <div className="col-4">"God kaffe er ikke bare produsert av de Norske gjeitene fra fjellene i kypros."</div>
                        </div>
                        <div className="row rowBottomHeight">
                            <div className="col-7 col-md-8"></div>
                            <div className="col-5 col-md-4">"Beste kaffe! Produsert av de Norske gjeitene fra fjellene i kypros."</div>
                        </div>
                    </div>
                </div>
                <RecommendedProducts />
            </div>
        )
    }
}

export default LandingPage
