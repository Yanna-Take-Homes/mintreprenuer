exports.up = function(knex) {
    return knex.schema.createTable('product_reviews', table => {
        table.increments();
        table.integer('rating').notNullable();
        table.integer('product_id').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('product_reviews');
};

