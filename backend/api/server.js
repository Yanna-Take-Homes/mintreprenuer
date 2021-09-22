const express = require( 'express' );
const server = express();
server.use( express.json() );

/* routes */

const ping = require( './routes/ping.js' );
const products = require('./routes/products.js');

server.use( '/ping', ping );
server.use('/api/products', products);

module.exports = server;