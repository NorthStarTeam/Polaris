exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE users`;
  return knex.raw(dropQuery);
};
