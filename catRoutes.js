const express = require('express')
const catController = require('./catController')
const router = express.Router();

router
    .route('/')
    .get(catController.getAllCats)
    .post(catController.createCat)

router
    .route('/:id')
    .delete(catController.deleteCat)

router
    .route('/:breed')
    .get(catController.searchCat)

router
    .route('/topfriendly')
    .get(catController.topfriendly)

router
    .route('/mostintelligent')
    .get(catController.mostintelligent)


module.exports = router;