"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "ContentArea",
    embedded: false
  },
  {
    name: "ContentText",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Grind",
    embedded: false
  },
  {
    name: "GrindOption",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderLine",
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
    name: "Region",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "SKU",
    embedded: false
  },
  {
    name: "SubCategory",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vendor",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://socialcoffee-heroku-ef34f637c9.herokuapp.com/socialcoffee-prisma-heroku/dev`
});
exports.prisma = new exports.Prisma();
