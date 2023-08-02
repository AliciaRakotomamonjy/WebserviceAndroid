var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200)
  res.json({
    status: 200,
    data: [],
    message: "Bienvenue !"
  });
});

module.exports = router;
