const router = require('express').Router();
const {
    rep_membre,
    store,
    rep_nationalite,
    rep_etat,
    on_membre,
    update,
    bannir
} = require('../controllers/MembreController');

router.post('/rep_membre',rep_membre);
router.post('/store',store);
router.post('/rep_nationalite/',rep_nationalite);
router.post('/rep_etat/',rep_etat);
router.post('/on_membre/',on_membre);
router.post('/update/',update);
router.post('/bannir/',bannir);

module.exports = router;
