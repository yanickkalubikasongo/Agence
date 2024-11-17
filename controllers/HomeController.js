require('dotenv').config();
const {sequelize}        = require('../config/db'); 
const fs                 = require('fs/promises');
const utilisateurService = require('../services/utilisateur.service');
const bcrypt             = require("bcrypt");

module.exports={
    index:async (req,res)=>{
        res.render('connexion_admin',{
            message_alerte_authent : (req.params.message) ? req.params.message : ''
        });
    },
    create_new_mdp:async (req,res)=>{
        delete req.params
        let BodyRequest = req.body,
            msg_err_new_mdp 
 
        if(BodyRequest.new_mdp == BodyRequest.mdp_confirm){
 
            let user = await utilisateurService.recuperation_id_mdp_oublie(BodyRequest.pseudo),
                ancien_mdp = ( user != '') ? user[0].mot_de_passe : ''
                
             if(await bcrypt.compare(BodyRequest.mdp, ancien_mdp) == true){
                 if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/.test(BodyRequest.new_mdp)) {  
                     msg_err_new_mdp = 'Le mot de passe doit être composé de 10 caractères; avoir au moins une lettre majuscule, une lettre miniscule, un chiffre, et un caractère special.'
                     res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
                 }else{
                     await utilisateurService.create_new_mdp_(BodyRequest)
                     res.redirect('/');
                 }
             }else{
                 msg_err_new_mdp = 'Pseudo ou mot de passe introuvable'
                 res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
             }
        }else{
             msg_err_new_mdp = 'Les deux nouveaux mots de passe ne correspondent pas'
             res.redirect('/enregister_modif_mdp/'+ msg_err_new_mdp);
        }
    },
    mdp_oublie:async (req,res)=>{
        res.render('Authentification/mdp_oublie',{
            msg_echec_recup_mdp : req.params.msg_echec_recup_mdp
        });
    },
    enregister_modif_mdp:async (req,res)=>{
        res.render('Authentification/changement_mot_de_passe',{
            msg:req.params.msg_err_new_mdp
        });
    },
    authentification_admin : async(req,res)=>{
        try {
            delete req.params
            let pseudo_ = req.body.Pseudo,
                mdp_    = req.body.mdp,
                message = ''
            
            if(typeof pseudo_ !== 'undefined' && typeof mdp_ !== 'undefined' ) {
                let utilisateur= await utilisateurService.check_pseudo_mdp_admin_plat(pseudo_),
                    connexion1 = await utilisateurService.connexion_administrateur(pseudo_),
                    connexion  = ''

                if(connexion1 !='') if(await bcrypt.compare(mdp_,connexion1[0].mdp) == true) connexion = connexion1

                if(connexion == '' || utilisateur ==''){
                    message = 'Coordonnées introuvables'
                    res.redirect('/administrateur/'+ message)
                }else{
                    if(utilisateur[0].eta_us == 1){
                        if(utilisateur[0].etat_mdp == 1){
                            req.session.org       = utilisateur[0].id_o
                            req.session.pseudo    = pseudo_
                            req.session.mdp       = mdp_
                            req.session.id_compte = utilisateur[0].id
                            if(req.body.Pseudo) await utilisateurService.create_connexion(req.session.id_compte)
                            res.redirect('/actualisation/'+ pseudo_)
                        } else {
                            if(utilisateur[0].etat_mdp == 0){
                                res.render('Authentification/changement_mot_de_passe',{
                                    msg:''
                                });
                            }
                        }
                    }else{
                        message = 'Vous êtes désactivé'
                        res.redirect('/administrateur/'+ message)
                    }
                }
            }else{
                message = 'Pseudo ou Mot de passe manquant'
                res.redirect('/administrateur/'+ message)
            }
        } catch (error) {
            res.send('Erreur : '+ error)
        }
    },
    actualisation : async(req,res)=>{  
        //if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let connexion1 = await utilisateurService.connexion_administrateur((req.params.pseudo_) ? req.params.pseudo_ : req.session.pseudo)
                    utilisateur= await utilisateurService.check_pseudo_mdp_admin_plat((req.params.pseudo_) ? req.params.pseudo_ : req.session.pseudo)
                    
                res.render('home',{
                    type :utilisateur[0].typee,
                    photo: connexion1
                });

            } catch (error) {
                res.send('Erreur : '+ error)
            }
        /*}else{
            res.redirect('/')
        }*/
    },
    changer_mdp: async (req, res)=> {
         try {
            let erreur = req.params.erreur
            if(erreur){
                res.json({erreur})
            }else res.render('Authentification/changement_mot_de_passe')
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    deconnexion : async (req, res)=> {
        try {
            if(req.session.id_compte){
                await utilisateurService.deconnexion_simple_user(req.session.id_compte)
                
                delete req.session.pseudo
                delete req.session.org
                delete req.session.mdp
                delete req.session.id_compte
            }
            res.redirect('/administrateur')
        } catch (error) {
            res.send('Erreur '+error)
        }
    }
}
