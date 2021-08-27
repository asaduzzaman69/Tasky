//dependencies
const express = require('express');

//initialise the Router
const Router = express.Router();

//TODO: separte the handler fucntion to a controller and complete the route
Router.get('/login', (req, res) => {
   res.send('this is login route');
});

//TODO: separte the handler fucntion to a controller and complete the route
Router.get('/register', (req, res) => {
   res.send('this is register route');
});

//export the router
module.exports = Router;
