const router = require('express').Router();
const {
   // index,
    create,
    repertoire,
    rep_transaction,
    create_poucentage_depot,
    select_poucentage_depot,
    send_pourcentage,
    on_agence,
    update,
    on_transaction,
    update_transaction,
    rep_province,
    rep_type_piece,
    rep_type_membre,
    create_monnaie,
    rep_etat_civil,
    search_compte,
    send_credit,
    rep_creance,
    tableau_de_bord,
    solde_agence,
    nouveau_depot,
    nouveau_retrait,
    nouveau_transfert,
    demande_solde,
    update_credit,
    search_transact,
    check_mdp,
    get_user
} = require('../controllers/AgenceController');

router.post('/check_mdp',check_mdp);
router.post('/create_monnaie',create_monnaie);
router.post('/search_transact',search_transact);
router.post('/demande_solde',demande_solde);
router.post('/nouveau_transfert',nouveau_transfert);
router.post('/nouveau_retrait',nouveau_retrait);
router.post('/nouveau_depot',nouveau_depot);
router.post('/update_credit',update_credit);
router.post('/tableau_de_bord',tableau_de_bord);
router.post('/solde_agence',solde_agence);
router.post('/get_user',get_user);
router.post('/rep_creance',rep_creance);
router.post('/send_credit',send_credit);
router.post('/create',create);
router.post('/search_compte',search_compte);
router.post('/update',update);
router.post('/repertoire',repertoire);
router.post('/rep_transaction',rep_transaction);
router.post('/on_transaction',on_transaction);
router.post('/create_poucentage_depot',create_poucentage_depot);
router.post('/select_poucentage_depot',select_poucentage_depot);
router.post('/send_pourcentage',send_pourcentage);
router.post('/on_agence',on_agence);
router.post('/update_transaction',update_transaction);
router.post('/rep_province',rep_province);
router.post('/rep_type_piece',rep_type_piece);
router.post('/rep_type_membre',rep_type_membre);
router.post('/rep_etat_civil',rep_etat_civil);

module.exports = router;
