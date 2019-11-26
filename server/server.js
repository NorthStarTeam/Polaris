const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const dbConfig = require('../knexfile');
const knex = require('knex')(dbConfig.development);

app.get('/users', (req, res, next) => {
  console.log('displaying all users');
  knex('users').then(users => res.send(users));
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//serve the bundle.js as a static file first
app.use('/polaris', express.static(path.resolve(__dirname, '../polaris')));

//error out if nothing is working
app.use('*', (req, res, next) => {
  console.log(`couldn't find anything`);
  res.status(404).send(`<h1>Page Doesn't Exist</h1>`);
});

//start running the server on the secure port from the .env file
app.listen(port, () => {
  console.log(`server listening on Port ${port}`);
});
