exports.up = function (knex) {
  // alter table
  return knex.schema.table("fruits", (tbl) => {
    tbl.string("color");
  });
};

exports.down = function (knex) {
  return knex.schema.table("fruits", (tbl) => {
    tbl.dropColumn("color");
  });
};
