exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'FreddieT803',
          password: '123',
          location: 'Savannah, Ga',
          name: 'Freddie',
          email: 'fthompson803@live.com',
          user_type: 1
        },
        {
          username: 'BritBrit',
          password: '123',
          name: 'Brittany',
          user_type: 2
        }
      ]);
    });
};
