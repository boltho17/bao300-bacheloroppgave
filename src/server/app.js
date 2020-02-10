const path = require('path');
const express = require('express');
var cors = require('cors');
const proxy = require("http-proxy-middleware");
const {ApolloServer, graphiqlExpress} = require('apollo-server-express');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');
require('dotenv').config();

/*
    We still are going to use Express... Apollo will just add to it a
    specific endpoint to handle GraphQL requests
 */

const app = express();

/*
    A GraphQL API is defined by:
    1) a schema, specifying what is available
    2) resolvers: to map from schema to our domain model (eg, data in databases)
 */
const apollo = new ApolloServer({typeDefs, resolvers});
apollo.applyMiddleware({app, path: "/graphql"});


//needed to server static files, like HTML, CSS and JS.
app.use(express.static('public'));

// CORS
const corsOptions = {
    exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

module.exports = app;
