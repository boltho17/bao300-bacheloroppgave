import React from 'react';
import RecommendedProducts from '../components/RecommendedProducts'
import Cart from '../components/Cart'
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landingsside">

        <div className="image-container header" >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 header-content-wrap text-center">
                <h1 className="header-title">
                  Den beste lokale kaffen,<br />
                  hjem til deg
                </h1>
                <h2 className="header-subtitle">
                  Oppdag nye smaker og kaffebrennerier<br />
                  fra hele Norge.
                </h2>
                <Link to="/products">
                  <button className="header-button text-uppercase">
                    til nettbutikken
                  </button>
                </Link>

              </div>
            </div>

          </div>
          <div className="scrollIndicator">&#xfe40;</div>
        </div>
        <Cart />

    {/* features */}
        <div className="featureSection featuresTEMP section">

          <div className="featuresContent row w-75 mx-auto shadow">
            <div className="featureTEMP  col">

              <div>
                <h3 className="featureTitle title">Feature title</h3>
              </div>
              <div>
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl</p>
              </div>

            </div>

            <div className="featureTEMP col middle">
              <h3 className="featureTitle title">Feature title</h3>
              <div>
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl</p>
              </div>

            </div>

            <div className="featureTEMP  col">
              <h3 className="featureTitle title">Feature title</h3>
              <div className="featureText">
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl</p>
              </div>

            </div>
          </div>

        </div>
        {/* .features  */}
        <h2 className="recommended-product-heading">Nytt og spennende</h2>
        <RecommendedProducts products={this.props.products} onSelect={this.props.onSelect}/>

        <section className="artikkel-container">
          <h2 className="text-center">
            En eller annen artikkel?
          </h2>
          <div className="container artikkel-container-content-wrap">
            <div className="row">
              <div className="artikkel-container-col-text col-lg-6 px-0">
                <p className="font-weight-bolder artikkel-container-col-text-content">
                  Noe spennende om brygging, eller kanskje en quote. Alenean eu turpis dolor. Nullam id sagittis erat. Duis quis enim quis ligula Suspendisse potenti.
                </p>
              </div>
              <div className="col-lg-6 px-0 img-box">
                <img src="/Kaffe-Trakter.jpeg" className=" img w-100" alt="kaffe-trakter"/>
              </div>
            </div>

          </div>

        </section>

      </div>
    )
  }
}

export default LandingPage
