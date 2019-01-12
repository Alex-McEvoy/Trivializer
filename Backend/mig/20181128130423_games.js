exports.up = function(knex, Promise) {
  return knex.schema.createTable("Games", function(table) {
    table.increments();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Users");
    table.string("name").notNullable();
    table.text("description");
    table.bigInteger("date_created");
    table.bigInteger("date_played").defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Games");
};
