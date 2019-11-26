exports.up = async function(knex, Promise) {
  await knex.schema.createTable('messages', table => {
    table.increments('id').primary();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id');
    table
      .integer('application_id')
      .unsigned()
      .references('applications.id');
    table
      .integer('message_id')
      .unsigned()
      .references('messages.id');
    table.text('body');
    table.timestamps(true, true);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('messages', table => {
    table.dropForeign(['user_id', 'application_id', 'message_id']);
  });
};
