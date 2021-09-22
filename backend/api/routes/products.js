const express = require( 'express' );
const router = express.Router();
const products = require('../../database/models/products-model.js');
const db = require('../../database/dbConfig.js');

router.get('/', async (req, res) => {
    const allPosts = await products.getAll();
    try {
        res.status(200).json({allPosts})

    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    let { id, ...newPost } = req.body
    try {
        const allPosts = await products.insert(newPost);
        newPost = await db('products').where({title: newPost.title}).first();
        res.status(201).json({
            message: "post created!",
            newPost, allPosts
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;