import React from 'react';
import PropTypes from 'prop-types';

//TODO: Get / Save text in db

const LandingPageVendor = props => {
  return (
    <div className="landingpagevendor">

      <div className="header">
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
          <div className="headerButton button">
            <button type="button" className="btn btn-primary">
              Registrer bedrift
            </button>

          </div>
        </div>

      </div>

      <div className="main mainContent">


        <div className="contentSection content section container">

          <div className="">

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

          <div className="featureSection featuresTEMP section row">

            <div className="featureTEMP shadow col">

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
              <div className="featureButton button">
                <button type="button" className="btn btn-primary">
                  Klikk her
            </button>
              </div>
            </div>

            <div className="featureTEMP shadow col">

              <div className="featureSymbol symbol">
                &#x2605;
              </div>

              <h3 className="featureTitle title">Feature title</h3>
              <div>
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl, ut interdum dui posuere a. Aenean vel lacinia nulla,
                eget lacinia mi. </p>
              </div>
              <div className="featureButton button">
                <button type="button" className="btn btn-primary">
                  Klikk her
            </button>
              </div>
            </div>

            <div className="featureTEMP shadow col">

              <div className="featureSymbol symbol">
                &#x2605;
              </div>

              <h3 className="featureTitle title">Feature title</h3>
              <div className="featureText">
                <p className="bodyText featureText">Curabitur hendrerit mi
                nisl, ut interdum dui posuere a. Aenean vel lacinia nulla,
                eget lacinia mi. </p>
              </div>
              <div className="featureButton button">
                <button type="button" className="btn btn-primary">
                  Klikk her
            </button>
              </div>
            </div>

          </div>

          <div className="spacer">SPACER</div>
        </div>


      </div>

    </div>
  );
};

LandingPageVendor.propTypes = {

};

export default LandingPageVendor;