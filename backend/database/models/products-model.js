const db = require('../dbConfig.js');

async function insert(post) {
    await db('products').insert(post)
    return db('products');
};

async function getAll() {
    return db('products');
};

module.exports = {
    getAll, insert
};