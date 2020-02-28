const express = require('express');
const server = express();
const cors = require('cors');
const userRouter = require('./routes/user-router.js');

server.use(express.json());
server.use(cors());
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send({ message: 'api up and running' });
});

module.exports = server;
