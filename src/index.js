import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Firebase, { FirebaseContext } from './client/components/Firebase';



ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
