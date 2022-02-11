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
  res.status(200).json(returnArrayTemp);
});

server.post('/api/register', (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body.username || !body.password) {
    res.status(500).json({message: 'username and password required'});
  } else {
    users.push({
      id: Date.now(),
      username: body.username,
      password: body.password
    })
    .then(user => {
      res.status(201).json(user.username)
    })
    .catch((error) => {
      res.status(500).json({message: 'registration failure'});
    });
  }
});

server.post('/api/login', (req, res) => {

});

module.exports = server;

