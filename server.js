const express = require('express');

const ProjectRouter = require('./router/projectRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
})

module.exports = server;