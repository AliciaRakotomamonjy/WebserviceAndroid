var express = require('express');
var router = express.Router();
const categorieService = require('../services/categorieService')

/* GET users listing. */
router.get('/', async (req, res, next)=> {
    var categories = await categorieService.getAllCategories();
    res.status(200);
    res.json({
        status : 200,
        data: categories,
        message: ""
    })
});

module.exports = router;
