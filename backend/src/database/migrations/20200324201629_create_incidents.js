exports.up = knex => {
  return knex.schema.createTable("incidents", t => {
    t.increments();
    t.string("title").notNullable();
    t.string("description").notNullable();
    t.decimal("value").notNullable();

    t.string("ong_id").notNullable();

    t.foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("incidents");
};
