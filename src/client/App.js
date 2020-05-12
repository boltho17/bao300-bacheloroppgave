import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'
import AddProduct from "./pages/AddProduct";
import VendorSignUp from "./pages/VendorSignUp";
import ProductDetailView from './pages/ProductDetailView';
import Footer from "./components/Footer";
import SignUpPage from "./pages/CustomerSignUp";
import LandingPageVendor from './pages/LandingPageVendor';
import VendorsPage from "./pages/VendorsPage";
import VendorDetailView from "./pages/VendorDetailView";
import VendorDashboard from './pages/VendorDashboard';
import SearchPage from "./pages/SearchPage";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "./components/GraphQL/product/queries";


const App = () => {

  let products;

  // Putter selected produkt eller selger objekt i state, og passer det til DetailView som props.
  const [selected, setSelected] = useState()
  const onSelect = (target) => {
    setSelected(prevState => {
      return (
        target
      )
    })
  }

  // Henter alle produkter fra Database:
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (error) return `Error! ${error.message}`;
  if (data) {
    products = data.products
  }
  // console.log(data);


  return (
    <div className="app">
      <div className="site-content">
        <Router>
          <Switch>
            <React.Fragment>
              <Navigation />
              <Route exact path={ROUTES.LANDING} render={() => <LandingPage products={products} onSelect={onSelect} />} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={LoginPage} />
              <Route path={ROUTES.SEARCH}
                render={() => <SearchPage products={products} onSelect={onSelect} />} />
              <Route path={ROUTES.PRODUCTS}
                render={() => <ShopPage loading={loading} data={products} onSelect={onSelect} />} />
              <Route path={ROUTES.VENDOR_SIGNUP} component={props => (<VendorSignUp {...props} />)} />
              <Route path={ROUTES.ADD_PRODUCT} component={AddProduct} />
              <Route path="/product/:id" exact render={() => <ProductDetailView product={selected} products={products} onSelect={onSelect} />} />
              <Route path="/vendor/:id" exact render={() => <VendorDetailView vendor={selected} />} />
              <Route path={ROUTES.LANDING_VENDOR} component={LandingPageVendor} />
              <Route path={ROUTES.VENDORS_PAGE} render={() => <VendorsPage onSelect={onSelect} />} />
              <Route path={ROUTES.VENDOR_DASHBOARD} exact render={() => <VendorDashboard onSelect={onSelect} /> } />
              {/* <Route path="/dashboard/:id" exact render={() => <VendorDashboard vendor={selected} />} /> */}
            </React.Fragment>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
