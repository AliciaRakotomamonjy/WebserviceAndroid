var express = require('express');
var router = express.Router();
const avisService = require('../services/avisService');


router.post('/', async (req, res, next) => {
    try {
        let { note, commentaire, idUser, images, idArticle } = req.body;
        let dateAvis = new Date();
        let data = {
            note,
            commentaire,
            dateAvis,
            utilisateur: idUser,
            images
        }
        await avisService.createAvis(data, idArticle);
        res.status(200).json({
            status: 200,
            message: "avis inseré"
        })

    } catch (error) {
        res.status(500).json({
            message: " Une erreur est survenu  au Niveau de serveur"
        });
    }
});

module.exports = router;
