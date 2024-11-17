const router = require('express').Router();
const { accueil } = require('../controllers/UtilisateurController');

router.get('/',accueil)
module.exports = router;
