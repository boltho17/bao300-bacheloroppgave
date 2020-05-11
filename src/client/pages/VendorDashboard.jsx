import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import MainOverview from '../components/VendorDashboard/MainOverview';
import ProductOverview from '../components/VendorDashboard/ProductOverview';
import OrderOverview from '../components/VendorDashboard/OrderOverview';
import { AuthContext } from '../components/Firebase/AuthContext';

const VendorDashboard = props => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let vendor = useContext(AuthContext)?.vendor;
  console.log(vendor)
 

  return (
    <div className="vendorDashboard">
      {/* main */}
      <div className="container dashboard">
        {/* <h1 className="pageTitle">Kontrollpanel</h1> */}
        <div className="dashboard-wrap row">
          {/* sidebar */}
          <div className="col-3 dashboard-sidebar text-center pr-0">
            <div className="dashboard-sidebar-vendor">
              <div className="dashboard-sidebar-vendor-image mx-auto">

              </div>
              <div className="dashboard-sidebar-vendor-name text-uppercase">
                <p>{vendor?.displayName}</p>
              </div>
              <div className="dashboard-sidebar-list text-uppercase">
                <nav className="menu-nav">
                  <ul className="menu">
                    
                    <NavLink to={`/dashboard/main-overview`} activeClassName="active">
                      <li className="menu-item" onClick={() => setPage(1)}>Profil</li>
                    </NavLink>

                    <NavLink to={`/dashboard/product-overview`} activeClassName="active">
                      <li className="menu-item" onClick={() => setPage(2)}>Produktoversikt</li>
                    </NavLink>

                    <NavLink to={`/dashboard/order-overview`} activeClassName="active">
                      <li className="menu-item" onClick={() => setPage(3)}>Ordreoversikt <span className="badge badge-light badge-pill">2</span></li>
                    </NavLink>
                  </ul>
                </nav>
                <div className="dashboard-sidebar-create-product">
                  <Link to="/new_product">
                    <p className="bottom">+ Opprett produkt</p>
                  </Link>
                  <p className="dashboard-logout">
                    {/* flytt til bunnen */}
                  logg ut
                </p>
                </div>

              </div>
            </div>
          </div>
          {/* main-content */}
          <div className="col dashboard-main-content">
            {page === 1 &&
              <MainOverview handleShow={handleShow} vendor={vendor} />
            }
            {page === 2 &&
              <ProductOverview vendor={vendor} />
            }
            {page === 3 &&
              <OrderOverview vendor={vendor} />
            }
          </div>

          {/* .main-content */}

        </div>

      </div>

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

    </div>
  );
};

VendorDashboard.propTypes = {

};

export default VendorDashboard;
