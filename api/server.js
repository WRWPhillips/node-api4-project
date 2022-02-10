const express = require('express');

const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello from server!');
});

const users = [
  { 
    id: 1,
    username: 'joshjackson45',
    password: 'imnotafraidbyeminem66'
  },
  { 
    id: 2,
    username: 'fordfocusfan',
    password: 'auditthefed2012'
  },
  {
    id: 3,
    username: 'nordVPN',
    password: 'shrekisntlifeanymore97'
  }
]



server.get('/api/users', (req, res) => {
  const returnArrayTemp = [];
  users.map(user => {
    returnArrayTemp.push({
      id: user.id,
      username: user.username
    });
  });
  res.json(returnArrayTemp);
});


module.exports = server;

