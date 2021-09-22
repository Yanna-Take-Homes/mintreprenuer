const express = require('express');
const server = express();
server.use(express.json());

/* routes */

const ping = require('./routes/ping.js');
const products = require('./routes/products.js');
const productReviews = require('./routes/product-reviews.js');

server.use( '/ping', ping );
server.use('/api/products', products);
server.use('/api/product-reviews', productReviews);

module.exports = server;