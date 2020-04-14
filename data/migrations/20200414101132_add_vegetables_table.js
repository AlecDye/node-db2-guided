// the .up() describes the changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    // a primary key, called id that autoincrements
    tbl.increments("id");

    // an index makes searching for a value in a column a lot faster
    tbl.string("name", 255).notNullable().unique().index();
    tbl.boolean("tasty").defaultTo(false);
  });
};

// the .down() describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
