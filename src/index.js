import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {AuthProvider} from "./client/components/Firebase/AuthContext";

const client = new ApolloClient({
    uri: 'https://socialcoffee-heroku-ef34f637c9.herokuapp.com/socialcoffee-prisma-heroku/dev',
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
