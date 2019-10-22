const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": Rafael, "email": "rafael.lindoso@ageof3d.com" }

// CRUD - Create, Read, Update, Delete

const users = ['Rafael', 'Lindoso', 'Araújo']

//http://localhost:3000/users/20?nome=Lindoso
server.get('/users', (req, res) => {
  return res.json( users[index] );
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json( users[index] );
})

server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
})

server.listen(3000);
