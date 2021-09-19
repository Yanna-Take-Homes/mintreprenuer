const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('*', cors({
//     origin: ['http://localhost:3000'],
//    credentials: true,
// }));

server.get('/api', (res) => {
    res.status(200).json({message: "API Running!"});
});


module.exports = server;
