exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('id');
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password', 255).notNullable();
      tbl.string('name', 255).notNullable();
      tbl.string('email', 255).unique();
      tbl.string('location', 255);
      tbl.integer('user_type').notNullable();
      tbl.string('user_avatar', 255).defaultTo(null);
    })
    .createTable('how_to_guides', tbl => {
      tbl.increments('id');
      tbl.string('title', 128).notNullable();
      tbl.string('Steps', 5000).notNullable();
      tbl.string('ht_pic', 255);
      tbl.integer('likes').defaultTo(0);
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('how-to-guides')
    .dropTableIfExists('users');
};
