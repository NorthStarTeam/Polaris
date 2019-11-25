const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000

import userController from './controllers/users';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.post('/signup', 
  userController.createUser, 
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
  (req, res) => {
    // what should happen here on successful sign up?
    console.log('post request successful - signup redirect')
    res.redirect('/secret')
});

app.post('/login', 
  userController.verifyUser, 
//   cookieController.setSSIDCookie, 
//   sessionController.startSession,
  (req, res, next) => {
    // what should happen here on successful log in?
    console.log('post request successful - login')
    res.redirect('/secret')
});


/**
* Authorized routes
*/
app.get('/secret', userController.getAllUsers, (req, res) => {

  /**
  * The previous middleware has populated `res.locals` with users
  * which we will pass this in to the res.render so it can generate
  * the proper html from the `secret.ejs` template
  */
  res.render('./../client/secret', { users: res.locals.users });

});
//serve the bundle.js as a static file first
app.use('/polaris', express.static(path.resolve(__dirname, '../polaris')),(req, res,next)=>{
    console.log('served static bundle', path.resolve(__dirname, '../polaris'))
    // next();
})

//error out if nothing is working
app.use('*', (req, res, next)=>{
    console.log(`couldn't find anything`)
    res.status(404).send(`<h1>Page Doesn't Exist</h1>`)
})

//start running the server on the secure port from the .env file
app.listen(port, ()=>{
    console.log(`server listening on Port ${port}`)
})