const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbConfig = require('../knexfile');
const knex = require('knex')(dbConfig.development);
const userController = require('./controllers/users');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// knex('users').then(rows => console.log(rows));

// need to add middleware, userControl function
app.post('/login', userController.verifyUser, (req, res) => {
  res.redirect('/users');
});

app.post(
  '/signup',
  userController.checkUsernameAvailability,
  userController.createUser,
  (req, res) => {
    res.redirect('/users');
  }
);

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

app.use('*', userController.isLoggedIn);

app.get('/users', (req, res) => {
  let username = req.body.username || req.cookies.username;
  knex('users')
    .where({ username })
    .then(row => {
      res.json(row[0]);
    });
});

//error out if nothing is working
app.use('*', (req, res, next) => {
  console.log(`couldn't find anything`);
  res.status(404).send(`<h1>Page Doesn't Exist</h1>`);
});

const port = process.env.PORT || 3000;
//start running the server on the secure port from the .env file
app.listen(port, () => console.log(`server on Port ${port}`));
