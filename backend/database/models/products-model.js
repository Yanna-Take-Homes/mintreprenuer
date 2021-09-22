const db = require('../dbConfig.js');

async function insert(product) {
    await db('products').insert(product)
    return db('products');
};

async function getAll() {
    return db('products');
};

module.exports = {
    getAll, insert
};