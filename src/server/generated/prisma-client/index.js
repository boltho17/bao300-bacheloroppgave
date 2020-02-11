"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Vendor",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductImage",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Region",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://socialcoffee-heroku-ef34f637c9.herokuapp.com/socialcoffee-prisma-heroku/dev`
});
exports.prisma = new exports.Prisma();
