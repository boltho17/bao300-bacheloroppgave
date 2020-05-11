import React from 'react';

const MainOverview = props => {
  return (
    <>
      {/* content */}
        <div className="dashboard-main-content-edit-profile float-right">
          <p>Rediger profil</p>
        </div>

        <div className="dashboard-main-content-vendor text-center">


          <div className="dashboard-main-content-vendor-image mx-auto">

          </div>

          <div className="dashboard-main-content-vendor-name font-weight-bold">
            <h2>{props && props.vendor?.displayName}</h2>
          </div>

          <div className="dashboard-main-content-vendor-info">
            <p><span className="font-weight-bold"> Org.nr.: </span>{props && props.vendor?.organizationNumber}</p>
            <p>epost@epost.epost</p>
          </div>

          <div className="dashboard-main-content-vendor-bank-account-wrap">

            {/* conditional */}
            <div className="bankAccount noAccount">
              {
                // eslint-disable-next-line
              }<p><span className="font-weight-bold">Bankkonto: </span><span className="text-danger">ikke registrert</span> ❌</p>
            </div>

            <div className="bankAccount account">
              {
                // eslint-disable-next-line
              }<p><span className="font-weight-bold">Bankkonto: </span>1111 22 33334 ✔️</p>
            </div>
            {/* .conditional */}

          </div>

          <div className="dashboard-main-content-vendor-address row text-left mx-auto w-50">
            <div className="col">
              <p className="font-weight-bold">Adresse:</p>
              <p>Storgata 1</p>
              <p>0344 Oslo</p>
            </div>
            <div className="col">
              <p className="font-weight-bold">Kontaktinformasjon:</p>
              <p>epost@epost.epost</p>
              <p>(+47) 123 45 678</p>
            </div>
          </div>

          <div className="dashboard-main-content-vendor-social-media">
            <ul>
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
            </ul>
          </div>

          <div className="dashboard-main-content-vendor-presentation">
            <h3>Beskrivelse av bedift:</h3>
            {/* conditional */}
            <div className="dashboard-main-content-vendor-presentation-add">
              <p className="alert-warning">Rediger profil for å legge til resterende informasjon</p>
            </div>

            <div className="dashboard-main-content-vendor-presentation-edit">
              <p></p>
            </div>
            {/* .conditional */}

            <div className="dashboard-main-content-vendor-presentation-content w-75">
              <p>
                Vi skal tilby våre gjester den høyeste kvaliteten på
                kaffeprodukter og service i markedet, og være den
                foretrukne kompetanse- og informasjonsgiver for kaffe og
                kaffeprodukter. Med lidenskap for faget og ypperste kvalitet
                  på våre produkter<span>... </span>
                <span className="readMore" onClick={props.handleShow}>les hele</span></p>
            </div>

            <div className="images row w-75 mx-auto">
              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>
            </div>

          </div>


        </div>

      
    </>
  );
};

export default MainOverview;