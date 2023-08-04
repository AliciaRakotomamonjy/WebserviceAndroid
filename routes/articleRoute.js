var express = require('express');
var router = express.Router();
const articleService = require('../services/articleService')
const categorieService = require('../services/categorieService')

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try {
        let { categorieId } = req.body;
        var articles = await articleService.getArticles(categorieId);
        res.status(200);
        res.json({
            status: 200,
            data: articles,
            message: ""
        })

    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
}).post('/', async (req, res, next) => {
    try {
        let { titre, description, images, videos, datecreation, avis, idCategorie } = req.body;
        let data = {
            titre,
            description,
            images,
            videos,
            datecreation,
            avis,
            idCategorie
        }
        console.log(data);
        await articleService.createArticle(data);
        res.status(200);
        res.json({
            status: 200,
            message: "articles inseré"
        })

    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
});

module.exports = router;
