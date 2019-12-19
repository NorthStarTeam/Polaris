const dbConfig = require('../knexfile');
const knex = require('knex')(dbConfig.development);
// const bcyrpt = require('bcryptjs')
const msgController = {};

/**
 * user_id: 1, application_id: 1, body: 'Follow up email content.'
 */
msgController.createMsg = (req, res, next) => {
  const { user_id, application_id, body } = req.body;
  //   console.log(username, password)
  knex('messages')
    .insert({
      user_id,
      application_id,
      body,
    })
    .then(() => {
      console.log('Msg added successfully');
      next();
    })
    .catch(err => console.error(`Error in Msg Creator`));
};

msgController.delMsg = (req, res, next) => {
  const { id } = req.body;
  knex('accounts')
    .where()
    .del()
    .then(() => {
      console.log('Msg deleted successfully');
      next();
    })
    .catch(err => console.error(`Error in Msg Deletor`));
};

msgController.updateMsg = (req, res, next) => {
  const updatedData = {};
  const id = req.body.id;
  for (const data in req.body) {
    const fields = /^[user_id|application_id|body]$/;
    if (data.match(fields)) {
      updatedData[data] = req.body[data];
    }
  }
  knex('messages')
    .where({ id })
    .update(updatedData)
    .then(() => {
      console.log('Msg added successfully');
      next();
    })
    .catch(err => console.error(`Error in Msg Creator`));
};

module.exports = msgController;
