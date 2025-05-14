require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize} = require('../config/db');
const partenaireServices = require('../services/partenaire.service');

module.exports={
    enreg_partenaire: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                res.json({
                    reponse: await partenaireServices.enregistrer_partenaire(req.body)
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    find_user: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {     
                res.json({
                reponse: await partenaireServices.find_user(req.body,req.session.org)
            });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    find_temoin: async (req, res)=> {
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {  
                res.json({
                    reponse: await partenaireServices.find_temoin(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    find_gerant: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                res.json({
                    reponse: await partenaireServices.find_gerant(req.body)
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    rep_partenaire: async (req, res)=> {
        try {
            let pseudo_session_admin =  req.session.pseudo,
                hopital_session_admin =  req.session.hp,
                mdp_session_admin = req.session.mdp,
                id_compte_session = req.session.id_compte
            if(typeof pseudo_session_admin !== 'undefined' && typeof hopital_session_admin !== 'undefined' && typeof mdp_session_admin !== 'undefined' && typeof id_compte_session !== 'undefined')  {
                res.json({
                    rep: await partenaireServices.rep_part()
                });
            }else{
                res.redirect("/administrateur")
            }
        } catch (error) {
            res.send('Erreur '+ error)
        }
    }
}
