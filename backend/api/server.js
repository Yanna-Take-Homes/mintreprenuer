const express = require( 'express' );
const server = express();
server.use( express.json() );

/* routes */

const ping = require( './routes/ping.js' );
server.use( '/ping', ping );

module.exports = server;