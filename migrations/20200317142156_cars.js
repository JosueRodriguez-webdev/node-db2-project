exports.up = function(knex) {
  return knex.schema.createTable("cars", (table) => {
    //id
    table.increments();
    //vin
    table
      .string("vin", 17)
      .notNullable()
      .unique();
    //make
    table.string("make", 50).notNullable();
    //model
    table.string("model", 50).notNullable();
    //mileage
    table.integer("mileage").notNullable();
    //transmission
    table.string("transmission", 50);
    //status
    table.string("status", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
