exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('title').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
};