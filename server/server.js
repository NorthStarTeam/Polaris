const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbConfig = require('../knexfile');
const knex = require('knex')(dbConfig.development);
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/signup',
    userController.createUser,
    //   cookieController.setSSIDCookie,
    //   sessionController.startSession,
    (req, res) => {
        // what should happen here on successful sign up?
        // console.log('post request successful - signup redirect')
    });

app.post('/login',
    userController.verifyUser,
    //   cookieController.setSSIDCookie, 
    //   sessionController.startSession,
    (req, res, next) => {
        // what should happen here on successful log in?
        // console.log('post request successful - login')
    });

//serve the bundle.js as a static file first
app.use(express.static(path.resolve(__dirname, '../polaris')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

// need to add middleware, userControl function
app.post('/userlogin', (req, res) => {
  console.log('user logged-in');
  res.status(200).send('inside server login');
});

app.get('/users', (req, res, next) => {
  console.log('displaying all users');
  knex('users').then(users => res.send(users));
});

//error out if nothing is working
app.use('*', (req, res, next) => {
  console.log(`couldn't find anything`);
  res.status(404).send(`<h1>Page Doesn't Exist</h1>`);
});

const port = process.env.PORT || 3000;
//start running the server on the secure port from the .env file
app.listen(port, () => console.log(`server on Port ${port}`));
