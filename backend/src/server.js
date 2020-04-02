const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://kevinsilvatec:napa2106@clusterkevinsilva-hwoq9.mongodb.net/tindev?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);