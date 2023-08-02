var express = require('express');
var router = express.Router();
const utilisateurService = require('../services/utilisateurService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json({
    status : 200,
    data: [],
    message: ""
  })
});


router.post('/signup', async (req, res) => {
  const { nom, prenom, dateNaissance, adresse, login, motdepasse } = req.body;

  try {
    const nouvelUtilisateur = await utilisateurService.doInscription(
      nom,
      prenom,
      dateNaissance,
      adresse,
      login,
      motdepasse
    );
    res.status(201).json(nouvelUtilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
