exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex('users')
    .del()
    .then(() =>
      Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: 'justinDev',
          email: 'sample@gmail.com',
          password: 'password'
        })
      ])
    );
