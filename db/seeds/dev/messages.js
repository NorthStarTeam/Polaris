exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        { user_id: 1, application_id: 1, body: 'Follow up email content.' },
      ]);
    });
};
