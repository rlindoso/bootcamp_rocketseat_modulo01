const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": Rafael, "email": "rafael.lindoso@ageof3d.com" }

const users = ['Rafael', 'Lindoso', 'Araújo']

//http://localhost:3000/users/20?nome=Lindoso
server.get('/users/:index', (req, resp) => {
  const { index } = req.params;

  return resp.json({ message: `Hello ${users[index]}.` });
})

server.listen(3000);
