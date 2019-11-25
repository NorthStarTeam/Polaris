const User = require('../models/User');
const bcyrpt = require('bcryptjs')
const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  // write code here
  console.log('creating user')
  let {username, password} = req.body
  console.log(username, password)
  
  User.create({username: username, password: password}, (err, result) => {
    if (err) {
      console.log('damn, this might already exist')
      // res.locals.userExists = true
      res.render('./../client/signup', {error: err})
    }
    else {
      console.log('result in user create', result)
      res.locals.userIdWillWork = result.id
      return next()
    }
  })
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = function (req, res, next) {
  // write code here

  User.findOne({username: req.body.username}, function (err, user){    
    if (err) console.log(err)
    else {
      bcyrpt.compare(req.body.password, user.password, function(err,result) {
        if (result) {
          console.log('matched password')
          console.log(user)
          res.locals.userIdWillWork = user.id
          return next()
        }
        else {
          console.log('didnt match password')
          res.redirect('/signup')
        }  
      })     
    }
  })
};

module.exports = userController;