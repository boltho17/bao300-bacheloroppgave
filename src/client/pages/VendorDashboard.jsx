import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VendorDashboard = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="vendorDashboard">
      <Modal show={show} onHide={handleClose} className="modal-vendor-presentation">
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto">Beskrivelse av bedrift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Vi skal tilby våre gjester den høyeste kvaliteten på kaffeprodukter
            og service i markedet, og være den foretrukne kompetanse- og
            informasjonsgiver for kaffe og kaffeprodukter. Med lidenskap for
            faget og ypperste kvalitet på våre produkter er vi stolte av å
            tilby våre gjester en god og smaksrik opplevelse hvert eneste
            besøk!
          </p>
          <p>
            Vi er lokalisert der folk ferdes, jobber og bor, og derfor
            finner du oss alltid på gateplan og oftest på et hjørne. Mange
            kaffesorter med fargerike lapper, hjemmekoslig innredning med
            informative kritt-tavler og dempet atmosfære. Vi ønsker at du er
            velkommen hver gang og kommer tilbake til oss for å nyte din
            favorittkaffe. Velkommen til lidenskap og kvalitet.
          </p>
          <p>
            Et steinkast
            fra vårt hovedkontor på Grønland har vi vårt eget brenneri. Her
            brenner vi kaffe hver dag basert på bestillinger fra butikkene &
            nettbutkken vår. Vi brenner her alle våre Cup of Excellence
            partier og kaffepartier i vår kategori sesongens
          </p>
          <p>
            Vi har alltid mellom 16 og 20 forskjellige typer kaffe i løsvekt 
            og garanterer ferskhet og kvalitet i hele utvalget.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p className="modal-close" onClick={handleClose}>
            Lukk
          </p>
        </Modal.Footer>
      </Modal>
      {/* main */}
      <div className="container dashboard">
        <h1 className="pageTitle">Kontrollpanel</h1>
        <div className="dashboard-wrap row">
          {/* sidebar */}
          <div className="col-3 dashboard-sidebar text-center pr-0">
            <div className="dashboard-sidebar-vendor">
              <div className="dashboard-sidebar-vendor-image mx-auto">

              </div>
              <div className="dashboard-sidebar-vendor-name text-uppercase">
                <p>((vendor.name))</p>
              </div>

              <div className="dashboard-sidebar-list text-uppercase">
                <nav className="menu-nav">
                  <ul className="menu">
                    <li className="active menu-item">Profil</li>
                    <li className="menu-item">Produktoversikt</li>
                    <li className="menu-item">Ordreoversikt <span class="badge badge-light badge-pill">2</span></li>
                  </ul>
                </nav>
                <div className="dashboard-sidebar-create-product">
                  <Link to="/new_product">
                    <p className="bottom">+ Opprett produkt</p>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="col dashboard-main-content">
            <div className="dashboard-main-content-edit-profile float-right">
              <p>Rediger profil</p>
            </div>

            <div className="dashboard-main-content-vendor text-center">


              <div className="dashboard-main-content-vendor-image mx-auto">

              </div>

              <div className="dashboard-main-content-vendor-name font-weight-bold">
                <h2>((Vendor.Name))</h2>
              </div>

              <div className="dashboard-main-content-vendor-info">
                <p><span className="font-weight-bold">Org.nr.:</span> 123456789</p>
                <p>epost@epost.epost</p>
              </div>

              <div className="dashboard-main-content-vendor-bank-account-wrap">

                {/* conditional */}
                <div className="bankAccount noAccount">
                  <p><span className="font-weight-bold">Bankkonto: </span><span className="text-danger">ikke registrert</span> ❌</p>
                </div>

                <div className="bankAccount account">
                  <p><span className="font-weight-bold">Bankkonto: </span>1111 22 33334 ✔️</p>
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
                    <span className="readMore" onClick={handleShow}>les hele</span></p>
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

          </div>

        </div>












      </div>

    </div>
  );
};

VendorDashboard.propTypes = {

};

export default VendorDashboard;
