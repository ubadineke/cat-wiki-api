const express = require('express')
const catController = require('./catController')
const router = express.Router();

router
    .route('/')
    .get(catController.getAllCats)
    .post(catController.createCat)
    .delete(catController.deleteByBreed)
    
    
router
    .route('/breed/:breed')
    .get(catController.getByBreed)
    .delete(catController.deleteByBreed)
    .patch(catController.updateByBreed)

router
    .route('/topfriendly')
    .get(catController.topfriendly)

router
    .route('/mostintelligent')
    .get(catController.mostintelligent)

router
.route('/:id')
.get(catController.getById)
.delete(catController.deleteById)
.patch(catController.updateById)

module.exports = router;