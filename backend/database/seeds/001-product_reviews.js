
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_reviews').insert([
          {
              description: "the bomb.com, awesomeness",
              rating: 5,
              product_id: 1
          },
          {
              description: "fluffier than a rabbit. 5 thumbs down",
              rating: 1,
              product_id: 1
          },
          {
              description: "I like my hot pockets lukewarm, not my books",
              rating: 3,
              product_id: 1
          },
      ]);
    });
};
