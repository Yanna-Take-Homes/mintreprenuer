const express = require('express');
const router = express.Router();
const productReviews = require('../../database/models/product-reviews-model.js');
const db = require('../../database/dbConfig.js');

router.get('/', async (req, res) => {
    const allReviews = await productReviews.getAll();
    try {
        res.status(200).json({allReviews})

    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    let { id, ...newReview } = req.body
    try {
        const allReviews = await productReviews.insert(newReview);
        const allReviewsForProduct = await db('product_reviews').where({product_id: newReview.product_id});
        res.status(201).json({
            message: "review created!",
            allReviewsForProduct
        })
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;