var express = require('express');
var router = express.Router();
const articleService = require('../services/articleService')
const categorieService = require('../services/categorieService')

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try {
        let { categorieId, titre } = req.body;
        var articles = await articleService.getArticles(categorieId, titre);
        res.status(200);
        res.json({
            status: 200,
            data: articles,
            message: "liste d'articles"
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

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let article = await articleService.getArticleById(id);
        res.status(200);
        res.json({
            status: 200,
            data: article,
            message: ""
        })

    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
});

module.exports = router;
