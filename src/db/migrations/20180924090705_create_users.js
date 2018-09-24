const uuidv4 = require('uuid/v4');

exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('users', table => {
      table
        .uuid('user_id')
        .primary()
        .defaultTo(uuidv4());
      table
        .string('username')
        .unique()
        .notNullable();
      table
        .string('email')
        .unique()
        .notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('users')]);
