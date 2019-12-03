const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dbConfig = require('../knexfile');
const knex = require('knex')(dbConfig.development);
const userController = require('./controllers/users');
const appController = require('./controllers/applications');
const msgController = require('./controllers/messages');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// knex('users').then(rows => console.log(rows));

knex('users')
  .where({ username: 'foo' })
  .join('applications', 'users.id', '=', 'applications.user_id')
  .join('messages', 'applications.id', '=', 'messages.application_id')
  .then(rows => {
    console.log(rows.length);
    // res.json(rows)
  });

//serve the bundle.js as a static file first
app.use(express.static(path.resolve(__dirname, '../polaris')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

// serving style.css
app.use('/style', (req, res) => {
  res
    .set({ 'Content-Type': 'text/css', charset: 'UTF-8' })
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/style.css'));
});

// need to add middleware, userControl function
app.post('/login', userController.verifyUser, (req, res) => {
  res.redirect('/users');
});

app.post('/logout', userController.logOut);

app.post(
  '/signup',
  userController.checkUsernameAvailability,
  userController.createUser,
  (req, res) => {
    res.redirect('/users');
  }
);

// app.use('*', userController.isLoggedIn);

app.get('/users', (req, res) => {
  let username = req.body.username || req.cookies.username;
  knex('users')
    .where({ username })
    .join('applications', 'users.id', '=', 'applications.user_id')
    .join('messages', 'applications.id', '=', 'messages.application_id')
    .then(rows => {
      res.json(rows);
    });
});

app.post('/message', msgController.createMsg, (req, res) => {
  res.redirect('/users');
});

app.put('/message', msgController.updateMsg, (req, res) => {
  res.redirect('/users');
});

app.delete('/message', msgController.delMsg, (req, res) => {
  res.redirect('/users');
});

app.post('/application', appController.createApp, (req, res) => {
  res.redirect('/users');
});

app.put('/application', appController.updateApp, (req, res) => {
  res.redirect('/users');
});

app.delete('/application', appController.delApp, (req, res) => {
  res.redirect('/users');
});

// Handle CSR catch all
app.get('/*', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

app.all((err, req, res, next) => {
  console.log('global error', err);
  res.status(500).send('Internal Server Error');
});

const port = process.env.PORT || 3000;
//start running the server on the secure port from the .env file
module.exports = app.listen(port, () => console.log(`server on Port ${port}`));
