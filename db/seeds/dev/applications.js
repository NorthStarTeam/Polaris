exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('applications')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('applications').insert([
        {
          user_id: 1,
          url: 'http://google.com',
          position: 'Senior Software Engineer',
          company: 'Google',
          contact: 'Ben Ray',
          phone: '333-666-9999',
          email: 'ben.ray@gmail.com',
          stage: 1,
          next: 'Call',
          due_date: knex.fn.now(),
        },
      ]);
    });
};
