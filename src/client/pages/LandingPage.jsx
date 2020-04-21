import React from 'react';

import RecommendedProducts from '../components/RecommendedProducts'

class LandingPage extends React.Component {

    render() {
        
        return ( 
            
            <div>

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

                <section className="features">
                
                    <div className="container">
                        <div className="row">
                            <div className="featurebox col-lg-4">
                                <h3>Kaffe Filler Her</h3>
                                <p>Her kommer det tekst som forteller om hvordan kaffen sprer seg fra regnet til
                                fjellene i kypros</p>
                            </div>
                            <div className="featurebox col-lg-4">
                                <h3>Kaffe Filler Her</h3>
                                <p>Her kommer det tekst som forteller om hvordan kaffen sprer seg fra regnet til
                                fjellene i kypros</p>
                            </div>
                            <div className="featurebox col-lg-4">
                                <h3>Kaffe Filler Her</h3>
                                <p>Her kommer det tekst som forteller om hvordan kaffen sprer seg fra regnet til
                                fjellene i kypros</p>
                            </div>
                        </div>

                    </div>
                </section>
                
                <RecommendedProducts />
                
                <section className="artikkel-container">
                    <div className="containertb">
                        <div className="row">
                            <div className="artikkel-tittle col-lg-6">
                                <h2>En eller annen artikkel?</h2>
                            </div>
                            <div className="artikkel-box col-lg-6">
                                <p>Her er det mye random text for å vise et eksempel. Denne blir veldig lang. Bare pese på så mye tekst man klarer slik at det ikke er noe rom igjen i denne boxen.</p>
                            </div>
                            <div className="artikkel-img col-lg-6">

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default LandingPage
