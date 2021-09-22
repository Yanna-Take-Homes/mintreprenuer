const db = require('../dbConfig.js');

async function insert(productReview) {
    await db('product_reviews').insert(productReview)
    return db('product_reviews');
};

async function getAll() {
    return db('product_reviews');
};

module.exports = {
    getAll, insert
};