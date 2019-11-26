exports.up = async function(knex, Promise) {
  await knex.schema.createTable('applications', table => {
    table.increments('id').primary();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id');
    table.string('url');
    table.string('position');
    table.string('company');
    table.string('contact');
    table.string('phone');
    table.string('email');
    table.integer('stage');
    table.string('next');
    table.timestamp('due_date').defaultTo(knex.fn.now());
    table.timestamps(true, true);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('applications', table => {
    table.dropForeign('user_id');
  });
};
