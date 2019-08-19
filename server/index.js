const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const server = express();
const port = 3500;

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => console.log(`Listening on port ${port} woo`));