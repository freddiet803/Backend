exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('how_to_guides')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('how_to_guides').insert([
        {
          title: 'simple survival',
          steps: '1. Eat Food 2. Drink Water 3. Clean Yourself 4. Repeat',
          user_id: 1
        }
      ]);
    });
};
