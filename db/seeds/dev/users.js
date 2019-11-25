exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'foo',
          password: 'bar',
          email: 'test@polaris.co',
          name: 'polaris admin',
          created_at: kne.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
