import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './styles/Main.sass'
import LandingPage from "./pages/LandingPage";
import TopNavbar from './components/TopNavbar'

const App = () => {
    return (
        <Router>
            <TopNavbar />
            <LandingPage />
        </Router>
    );
};

export default App;
