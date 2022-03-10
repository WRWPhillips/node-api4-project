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
    });
    res.status(201).json(body.username)
  }
});

server.post('/api/login', (req, res) => {
  const body = req.body
  console.log(body);
  if(!body.username || !body.password) {
    res.status(500).json({message: 'username and password required'});
  } else {
    const total = [];
    users.forEach(n => {
      console.log(Object.values(n));
      total.push(Object.values(n));
    });
    const total2 = [].concat.apply([], total);
    if(total2.includes(body.username) && total2.includes(body.password)) {
      res.status(200).json({message: "welcome!"})
    } else {
      res.status(404).json({message: "user with those credentials not found"})
    }
  }
});

module.exports = server;

