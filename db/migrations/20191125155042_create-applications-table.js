exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE applications(
    id SERIAL PRIMARY KEY NOT NULL,
    url TEXT,
    position TEXT,
    company TEXT,
    contact TEXT,
    phone TEXT,
    email TEXT,
    stage INTEGER,
    next TEXT,
    due_date TIMESTAMP,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE applications`;
  return knex.raw(dropQuery);
};
