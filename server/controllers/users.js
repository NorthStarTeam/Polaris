const dbConfig = require('../../knexfile');
const knex = require('knex')(dbConfig.development);
// const bcyrpt = require('bcryptjs')
const userController = {};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  console.log('creating user');
  const { username, password } = req.body;
  //   console.log(username, password)
  knex('users')
    .insert({ username, password })
    .then(() => {
      res.cookie('isLoggedIn', true, { httpOnly: true });
      res.cookie('username', username, { httpOnly: true });
      next();
    })
    .catch(err => console.error(`User ${username} could not be created`));
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.isLoggedIn = function(req, res, next) {
  console.log('isLoggedIn');
  let { isLoggedIn } = req.cookies;
  if (isLoggedIn) {
    return next();
  } else {
    res.redirect('/');
  }
};

userController.checkUsernameAvailability = function(req, res, next) {
  const { username } = req.body;
  knex('users')
    .where({ username })
    .then(row => {
      if (row.length !== 0) {
        res.send('Username not available');
      } else {
        next();
      }
    });
};

userController.verifyUser = function(req, res, next) {
  const { username, password } = req.body;
  // console.log('Hit verify user', username, password);
  knex('users')
    .where({ username, password })
    .then(rows => {
      console.log('rows => ', rows.length);
      if (rows.length !== 0) {
        console.log('Hit verify user ----> Row', rows.length);
        res.cookie('isLoggedIn', true, { httpOnly: true });
        res.cookie('username', username, { httpOnly: true });
        return next();
      } else {
        console.log('else =>');
        res.send('Invalid username or password');
      }
    })
    .catch(err => console.error(`User ${username} could not be verified`));
};

module.exports = userController;
