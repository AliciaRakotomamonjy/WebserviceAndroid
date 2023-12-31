var express = require('express');
var router = express.Router();
const favorisService = require('../services/favorisService');
const { extractColumnFromJson } = require('../utils/Util');


router.get('/', async (req, res, next) => {
    try {
        let { idUser } = req.query;
        let liste = await favorisService.getMyFavori(idUser);
        liste = extractColumnFromJson(liste,"articleId");
        res.status(200);
        res.json({
            status: 200,
            data: liste,
            message: "liste des favoris"
        })
    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
}).post('/', async (req, res, next) => {
    try {
        let { idUser, idArticle } = req.body;
        await favorisService.insertFavori(idUser, idArticle);
        res.status(200);
        res.json({
            status: 200,
            message: "favori inséré"
        })
    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
}).delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        await favorisService.deleteFavori(id);
        res.status(200);
        res.json({
            status: 200,
            message: "favori supprimé"
        })

    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
});



module.exports = router;
