const dbConfig = require('../../knexfile');
const knex = require('knex')(dbConfig.development);
// const bcyrpt = require('bcryptjs')
const appController = {};


/**
* createUser - create and save a new User into the database.
*/
appController.createApp = (req, res, next) => {
    console.log('creating user')
    const { user_id, 
        url,
        position,
        company,
        contact,
        phone,
        email,
        stage } = req.body
    const nextStep = req.body.next;
    //   console.log(username, password)
    knex('applications')
        .insert({
            user_id,
            url,
            position,
            company,
            contact,
            phone,
            email,
            stage,
            next: nextStep
        })
        .then(() => {
            console.log('App added successfully');
            next();
        })
        .catch(err => console.error(`Error in App Creator`));
};

appController.delApp = (req, res, next) => {
    const { id } = req.body
    knex('accounts')
        .where()
        .del()
        .then(() => {
            console.log('App deleted successfully');
            next();
        })
        .catch(err => console.error(`Error in App Deletor`));
}

appController.updateApp = (req, res, next) => {
    const updatedData = {};
    const id = req.body.id;
    for (const data in req.body) {
        const fields = /^[url|position|company|contact|phone|email|stage|next]$/
        if (data.match(fields)) {
            updatedData[data] = req.body[data]
        }
    }
    knex('applications')
        .where({ id })
        .update(updatedData)
        .then(() => {
            console.log('App added successfully');
            next();
        })
        .catch(err => console.error(`Error in App Creator`));
};


module.exports = appController;