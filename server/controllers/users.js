const knex = require('../models/User');
const bcyrpt = require('bcryptjs')
const userController = {};


/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  // write code here
  console.log('creating user')
  const {username, password} = req.body
//   console.log(username, password)
  knex('users')
  .insert({ username, password })
  .then( () => next() );
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = function (req, res, next) {
  // write code here
  const {username, password} = req.body
  knex('users')
  .where({username, password})
  .then(rows => {
    if(rows){
        // wrong password put logic here
        return next('WRONG') 
    }else{
        return next();
    }
  })
};

module.exports = userController;