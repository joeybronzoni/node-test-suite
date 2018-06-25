const express = require('express');

var app = express();

// for test-A

app.get('/', (req,res ) => {
  res.status(200).send('Hello Express!');
});

// for test-B
/*
app.get('/', (req,res ) => {
  res.status(404).send({
	error: 'Page not found.'
  });
});
*/

// for test-C
/*app.get('/', (req,res ) => {
  res.status(404).send({
	error: 'Page not found.',
	name: 'Todo App v1.0'
  });
});
*/

// for test-D

app.get('/users', (req,res ) => {
  res.send([
	{
	  name: 'joey',
	  age: 37
	},
	{
	  name: 'jimb',
	  age: 33
	},
	{
	  name: 'michelle',
	  age: 22
	}
  ]);
});


const PORT = 8080;
// Use `Express running → PORT ${server.address().port}` with back-tics for random port
const server = app.listen(PORT, () => {
  console.log(`Express running on PORT, ${PORT}`);
});

// supertest
/* We need to load in the express application in the server.test.js file
   In order to do this we need to export the app from our server:
*/
module.exports.app = app;
