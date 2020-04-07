import React from 'react';
import PropTypes from 'prop-types';

//TODO: Get / Save text in db

const LandingPageVendor = props => {
  return (
    <div className="landingpagevendor">

      <div className="header">
        HEADER
         <div className="headerContent">
          <div classname="headerTitle title">TITLE/SLOGAN</div>
          <div className="headerSubtitle subTitle title"><p>SUBTITLE</p></div>
          <div className="headerBodyText bodyText"><p>BODY TEXT</p></div>
          <div className="headerButton button">BUTTON</div>
        </div>

      </div>

      <div className="main mainContent">
        MAIN         

        <div className="contentSection content section container">
          content-section

          <div className="">
            CONTENT
             <div className="title">
              TITLE
             </div>
            <div className="bodyText">
              TEXT
            </div>
          </div>

          <div className="featureSection featuresTEMP section row ">
            FEATURE section

         <div className="featureTEMP col">
              FEATURE
             <div>TITLE</div>
              <div>DESC.</div>
              <div>BUTTON</div>
            </div>

            <div className="featureTEMP col">
              FEATURE
             <div>TITLE</div>
              <div>DESC.</div>
              <div>BUTTON</div>
            </div>

            <div className="featureTEMP col">
              FEATURE
             <div>TITLE</div>
              <div>DESC.</div>
              <div>BUTTON</div>
            </div>


          </div>




        </div>


      </div>

    </div>
  );
};

LandingPageVendor.propTypes = {

};

export default LandingPageVendor;