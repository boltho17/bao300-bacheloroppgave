import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Firebase, {FirebaseContext} from './client/components/Firebase';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://powerful-depths-31715.herokuapp.com/Prisma/dev',
});

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
