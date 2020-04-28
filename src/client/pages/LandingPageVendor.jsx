import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

//TODO: Get / Save text in db

const LandingPageVendor = () => {
  return (
    <div className="landingpagevendor">

      <div className="header overflow-hidden">
        <div className="headerContent float-md-right">
          <div className="headerTitle title">
            <h1>Bli selger!</h1>
          </div>
          <div className="headerSubtitle subTitle title">
            <h2>Undertittel</h2>
          </div>
          <div className="headerBodyText bodyText">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Link to={ROUTES.VENDOR_SIGNUP}>
            <div className="headerButton button">
              <button type="button" className="btn btn-primary text-uppercase">


                Registrer bedrift
            </button>

            </div>
          </Link>
        </div>
        <div className="scrollIndicator">&#xfe40;</div>
      </div>

      <div className="main mainContent">

        <div className="contentSection content section container">

          <div className="split intro row">

            <div className="col text">
              <div className="title">
                <h2>Quisque eu interdum</h2>

              </div>
              <div className="bodyText">
                <p>Duis nec nulla in nulla convallis auctor eget ac tortor.
                Cras vel libero tempus, pharetra mi et, egestas nulla.
                Vestibulum elementum nisl nulla, eget mattis eros hendrerit
                    nec.</p>
              </div>
            </div>
            <div className="col image">
              <img className="img-fluid" src="/pour.png" alt="pour.png"/>
            </div>



          </div>
        </div>
        <div className="featureSection featuresTEMP section">

          <div className="featuresContent row w-75 mx-auto shadow">
            <div className="featureTEMP  col">

              <div className="featureSymbol symbol">
                &#x2605;
              </div>

              <div>
                <h3 className="featureTitle title">Feature title</h3>
              </div>
              <div>
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl, ut interdum dui posuere a. Aenean vel lacinia nulla,
    eget lacinia mi. </p>
              </div>

            </div>

            <div className="featureTEMP  col middle">

              <div className="featureSymbol symbol">
                &#x2605;
              </div>

              <h3 className="featureTitle title">Feature title</h3>
              <div>
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl, ut interdum dui posuere a. Aenean vel lacinia nulla,
    eget lacinia mi. </p>
              </div>

            </div>

            <div className="featureTEMP  col">

              <div className="featureSymbol symbol">
                &#x2605;
              </div>

              <h3 className="featureTitle title">Feature title</h3>
              <div className="featureText">
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl, ut interdum dui posuere a. Aenean vel lacinia nulla,
    eget lacinia mi. </p>
              </div>

            </div>
          </div>



        </div>
        <div className="contentSection content section container">
          <div className="spacer">
          </div>

        </div>




      </div>

    </div>
  );
};

LandingPageVendor.propTypes = {

};

export default LandingPageVendor;
