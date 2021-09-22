const express = require('express');
const router = express.Router();
const products = require('../../database/models/products-model.js');
const db = require('../../database/dbConfig.js');

router.get('/', async (req, res) => {
    const allProducts = await products.getAll();
    try {
        res.status(200).json({allProducts})

    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    let { id, ...newProduct } = req.body
    try {
        const allProducts = await products.insert(newProduct);
        newProduct = await db('products').where({title: newProduct.title}).first();
        res.status(201).json({
            message: "product created!",
            newProduct, allProducts
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;