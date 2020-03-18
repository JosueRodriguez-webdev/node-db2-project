exports.up = function(knex) {
  return knex.schema.createTable("cars", (tbl) => {
    //id
    tbl.increments();
    //vin
    tbl
      .string("vin", 18)
      .notNullable()
      .unique();
    //make
    tbl.string("make", 50).notNullable();
    //model
    tbl.string("model", 50).notNullable();
    //mileage
    tbl.integer("mileage").notNullable();
    //transmission
    tbl.string("transmission", 50);
    //status
    tbl.string("status", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
