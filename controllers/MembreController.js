const bcrypt         = require('bcrypt');
const membreService  = require("../services/membre.service");
const {sequelize}    = require('../config/db');

module.exports={
    rep_etat:async (req,res)=>{
        let pseudo =  req.session.pseudo,
            organisation =  req.session.org,
            mdp = req.session.mdp,
            id_compte = req.session.id_compte
        if(typeof pseudo !== 'undefined' && typeof organisation !== 'undefined' && typeof mdp !== 'undefined' && typeof id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.rep_etat() });
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.redirect("/administrateur")
        }
    },
    update:async (req,res)=>{
        let pseudo =  req.session.pseudo,
            organisation =  req.session.org,
            mdp = req.session.mdp,
            id_compte = req.session.id_compte
        if(typeof pseudo !== 'undefined' && typeof organisation !== 'undefined' && typeof mdp !== 'undefined' && typeof id_compte !== 'undefined')  {
            try {
                res.json({ result: await membreService.update(req.body) });
            } catch (error) {
                res.send('Erreur :'+ error)
            }
        }else{
            res.redirect("/administrateur")
        }
    }
}