const bcrypt        = require('bcrypt');
const Validator     = require('body-validator');
const agenceService = require('../services/agence.service'); 
const {sequelize}   = require('../config/db');
const helperServices= require('../helper/helper');
const axios         = require('axios');
const utilisateurService = require('../services/utilisateur.service');
const personnelService = require('../services/personnel.service');

module.exports={
    check_mdp:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    result: await utilisateurService.check_mdp(req.body.mdp)
                });
            }catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    nouveau_transfert:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let erreur=[],
                    bodyRequest = req.body

                if(helperServices.presence(bodyRequest.exp)) erreur.push('Merci de saisir le numéro de compte expéditaire')
                else{
                    if(helperServices.presence(bodyRequest.rec)) erreur.push('Merci de saisir le numéro de compte récipiandaire')
                    else{
                        if(helperServices.presence(bodyRequest.montant)) erreur.push('Merci de saisir le montant')
                        else{
                            if(helperServices.presence(bodyRequest.devise)) erreur.push('Merci de choisir la devise')
                            else{
                                if(!Number.isInteger(parseFloat(bodyRequest.montant))) erreur.push('Merci de saisir une valeur entière')
                                else{
                                    if(parseInt(bodyRequest.montant) < 1 || parseInt(bodyRequest.montant) > 999 && (bodyRequest.devise=='USD' || bodyRequest.devise=='EUR')) erreur.push('La montant ne doit pas être inférieur à 1 ni supérieur 999 pour les EUR et USD')
                                    else{
                                        if(parseInt(bodyRequest.montant) < 1 || parseInt(bodyRequest.montant) > 999999 && (bodyRequest.devise=='CDF')) erreur.push('La montant ne doit pas être inférieur à 1 ni supérieur 999999 pour le CDF') 
                                        else{
                                            if( await utilisateurService.check_mdp(bodyRequest.password) == '' && bodyRequest.state_otp == true) erreur.push('Mot de passe introuvable')
                                            else{
                                                if( await utilisateurService.check_mdp(bodyRequest.password) == '' && bodyRequest.state_otp == true) erreur.push('Mot de passe introuvable')
                                                else{
                                                    if(bodyRequest.exp == bodyRequest.rec) erreur.push('Le transfert recursif n\'est pas autorisé')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(erreur==''){
                    let send_data = await agenceService.nouveau_transfert(bodyRequest,req.session.org,req.session.id_compte),
                        data_user = {
                            compte:bodyRequest.exp
                        },
                        element_compte = await agenceService.search_compte(data_user),
                        data = {
                            id:element_compte[0].id_user
                        },
                        use = await personnelService.check_state_user(data)

                    let data_user2 = {
                            compte:bodyRequest.rec
                        },
                        element_compte2 = await agenceService.search_compte(data_user2),
                        data2 = {
                            id:element_compte2[0].id_user
                        },
                        use2 = await personnelService.check_state_user(data2),
                        voir_erreur = 0
                    
                    if(use !=''){
                        if(use[0].etat_user !=1){
                            erreur.push('Cet expéditaire est bloqué')
                            voir_erreur = 1
                        }
                    }
                    
                    if(use2 !=''){
                        if(use2[0].etat_user !=1){
                            erreur.push('Ce recipiandaire est bloqué')
                            voir_erreur = 1
                        }
                    }

                    if(voir_erreur == 1){
                        res.json({
                            result: erreur
                        });
                    }else{
                        if(send_data == 3){
                            erreur.push('Ce compte expéditaire n\'existe pas')
                            res.json({
                                result: erreur
                            });
                        }else{
                            if(send_data == 4){
                                erreur.push('Ce compte récipendaire n\'existe pas')
                                res.json({
                                    result: erreur
                                });
                            }else{
                                if(send_data == 6){
                                    erreur.push('Solde insuffisant')
                                    res.json({
                                        result: erreur
                                    });
                                }else{
                                    if(send_data == 2){
                                        res.json({
                                            result: 'otp_on'
                                        });
                                    }else{
                                        if(send_data == 7){
                                            erreur.push('OTP inexistant')
                                            res.json({
                                                result: erreur
                                            });
                                        }else{
                                            if(send_data == 5){
                                                res.json({
                                                    result: 'r'
                                                });
                                            }else{
                                                if(send_data == 8){
                                                    erreur.push('Le montant rentrer est insuffisant')
                                                    res.json({
                                                        result: erreur
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }else{
                    res.json({
                        result: erreur
                    });
                }
            }catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },  
    update_credit:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    result: await agenceService.update_credit(req.body)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    create_monnaie:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let erreur=[],
                    bodyRequest = req.body

                if(helperServices.presence(bodyRequest.agence)) erreur.push('Merci de choisir l\'agence')
                else{
                    if(helperServices.presence(bodyRequest.montant)) erreur.push('Merci de saisir le montant')
                    else{
                        if(helperServices.presence(bodyRequest.devise)) erreur.push('Merci de choisir la devise')
                    }
                }
                if(erreur==''){
                    res.json({
                        result: await agenceService.create_monnaie(bodyRequest)
                    });
                }else{
                    res.json({
                        result: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    get_user:async (req,res)=>{ 
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.get_user(req.body)});
            } catch (error) {
            res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    tableau_de_bord:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    nb_partenaire        : await agenceService.nb_partenaire(),
                    nb_gest_credit       : await agenceService.nb_gestionnaire_credit(req.session.org),
                    nb_gest_compte       : await agenceService.nb_gestionnaire_compte(req.session.org),
                    compte_epargne       : await agenceService.compte_epargne(req.session.org),
                    compte_courant       : await agenceService.compte_courant(req.session.org),
                    nb_agent_agence      : await agenceService.agent_agence(req.session.org),
                    nb_agent_terrain     : await agenceService.agent_terrain(req.session.org),
                    nb_credits           : await agenceService.nb_credit(req.session.org),
                    nb_somme_depot_cdf   : await agenceService.somme_depot_par_agence_cdf(req.session.org,req.session.id_compte),
                    nb_somme_depot_usd   : await agenceService.somme_depot_par_agence_usd(req.session.org,req.session.id_compte),
                    nb_somme_depot_eur   : await agenceService.somme_depot_par_agence_eur(req.session.org,req.session.id_compte),
                    nb_somme_retrait_cdf : await agenceService.somme_retrait_par_agence_cdf(req.session.org,req.session.id_compte),
                    nb_somme_retrait_usd : await agenceService.somme_retrait_par_agence_usd(req.session.org,req.session.id_compte),
                    nb_somme_retrait_eur : await agenceService.somme_retrait_par_agence_eur(req.session.org,req.session.id_compte),
                    nb_somme_transfert_cdf : await agenceService.somme_transfert_par_agence_cdf(req.session.org,req.session.id_compte),
                    nb_somme_transfert_usd : await agenceService.somme_transfert_par_agence_usd(req.session.org,req.session.id_compte),
                    nb_somme_transfert_eur : await agenceService.somme_transfert_par_agence_eur(req.session.org,req.session.id_compte),
                    solde_portefeuil_cdf : await agenceService.solde_monnaie_electronique_agence(req.session.org,'CDF'),
                    solde_portefeuil_usd : await agenceService.solde_monnaie_electronique_agence(req.session.org,'USD'),
                    solde_portefeuil_eur : await agenceService.solde_monnaie_electronique_agence(req.session.org,'EUR')
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    search_transact:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let bodyRequest = req.body
                res.json({
                    result : await agenceService.search_transact(bodyRequest)
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    solde_agence:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let bodyRequest = req.body
                res.json({
                    result1 : await agenceService.solde_monnaie_electronique_agence(bodyRequest.id,'CDF'),
                    result2 : await agenceService.solde_monnaie_electronique_agence(bodyRequest.id,'USD'),
                    result3 : await agenceService.solde_monnaie_electronique_agence(bodyRequest.id,'EUR')
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    nouveau_depot:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let dataRequest= req.body,
                    erreur     = []
                
                if(helperServices.presence(dataRequest.compte)) erreur.push('Merci de saisir le numéro de compte')
                else{
                    if(helperServices.presence(dataRequest.montant)) erreur.push('Merci de saisir le montant')
                    else{
                        if(helperServices.presence(dataRequest.devise)) erreur.push('Merci de saisir la devise')
                        else{
                            if(isNaN(dataRequest.montant)) erreur.push('Merci de saisir un nombre')
                            else{
                                if(!Number.isInteger(parseFloat(dataRequest.montant))) erreur.push('Merci de saisir une valeur entière')
                                else{
                                    if(parseInt(dataRequest.montant) < 1 || parseInt(dataRequest.montant) > 999 && (dataRequest.devise=='USD' || dataRequest.devise=='EUR')) erreur.push('La montant ne doit pas être inférieur à 1 ni supérieur 999 pour les EUR et USD')
                                    else{
                                        if(parseInt(dataRequest.montant) < 1 || parseInt(dataRequest.montant) > 999999999 && (dataRequest.devise=='CDF')) erreur.push('La montant ne doit pas être inférieur à 1 ni supérieur 999999 pour le CDF')
                                    }
                                }
                            }
                        }
                    }
                }
                if(erreur==''){
                    let send_data = await agenceService.nouveau_depot(dataRequest,req.session.org,req.session.id_compte),
                        element_compte = await agenceService.search_compte(dataRequest),
                        data = {
                            id:element_compte[0].id_user
                        },
                        use = await personnelService.check_state_user(data)
                    if(use !=''){
                        if(use[0].etat_user == 1){
                            if(send_data == 'err_solde'){
                                erreur.push('Solde insuffisant')
                                res.json({
                                    result: erreur
                                });
                            }else{
                                if(send_data == 'err_compte'){
                                    erreur.push('Compte introuvable')
                                    res.json({
                                        result: erreur
                                    });
                                }else{
                                    if(send_data == 'min'){
                                        erreur.push('Le montant déposé est insuffisant')
                                        res.json({
                                            result: erreur
                                        });
                                    }else{
                                        res.json({
                                            result: 'r'
                                        });
                                    }
                                }
                            }
                        }else{
                            erreur.push('Cet utilisateur est bloqué')
                            res.json({
                                result: erreur
                            });
                        }
                    }else{
                        if(send_data == 'err_solde'){
                            erreur.push('Solde insuffisant')
                            res.json({
                                result: erreur
                            });
                        }else{
                            if(send_data == 'err_compte'){
                                erreur.push('Compte introuvable')
                                res.json({
                                    result: erreur
                                });
                            }else{
                                if(send_data == 'min'){
                                    erreur.push('Le montant déposé est insuffisant')
                                    res.json({
                                        result: erreur
                                    });
                                }else{
                                    res.json({
                                        result: 'r'
                                    });
                                }
                            }
                        }
                    }
                }else{
                    res.json({
                        result: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },  
    nouveau_retrait:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let dataRequest= req.body,
                    erreur     = []
        
                if(helperServices.presence(dataRequest.compte)) erreur.push('Merci de saisir le numéro de compte')
                else{
                    if(helperServices.presence(dataRequest.montant)) erreur.push('Merci de saisir le montant')
                    else{
                        if((dataRequest.state_otp == true) && (dataRequest.otp =='')) erreur.push('Merci de saisir l\'OTP')
                        else{
                            if(helperServices.presence(dataRequest.devise)) erreur.push('Merci de saisir la devise')
                            else{
                                if(isNaN(dataRequest.montant)) erreur.push('Merci de saisir un nombre')
                                else{
                                    if(!Number.isInteger(parseFloat(dataRequest.montant))) erreur.push('Merci de saisir une valeur entière')
                                    else{
                                        if(parseInt(dataRequest.montant) < 1 || parseInt(dataRequest.montant) > 999 && (dataRequest.devise=='USD' || dataRequest.devise=='EUR')) erreur.push('La montant ne doit pas être inférieur à 1 ni supérieur 999 pour les EUR et USD')
                                        else{
                                            if(parseInt(dataRequest.montant) < 1 || parseInt(dataRequest.montant) > 999999 && (dataRequest.devise=='CDF')) erreur.push('Le montant ne doit pas être inférieur à 1 ni supérieur 999999 pour le CDF') 
                                            else{
                                                if( await utilisateurService.check_mdp(dataRequest.password) == '' && dataRequest.state_otp == true) erreur.push('Mot de passe introuvable')
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(erreur==''){
                    let send_data = await agenceService.nouveau_retrait(dataRequest,req.session.org,req.session.id_compte),
                        element_compte = await agenceService.search_compte(dataRequest),
                        data = {
                            id:element_compte[0].id_user
                        },
                        use = await personnelService.check_state_user(data)
                    
                    if(use !=''){
                        if(use[0].etat_user == 1){
                            if(send_data == 0){
                                erreur.push('Compte introuvable')
                                res.json({
                                    result: erreur
                                });
                            }else{
                                if(send_data == 1){
                                    erreur.push('Solde insuffisant')
                                    res.json({
                                        result: erreur
                                    });
                                }else{
                                    if(send_data == 2){
                                        erreur.push('Le montant rentrer est insuffisant')
                                        res.json({
                                            result: erreur
                                        });
                                    }else{
                                        if(send_data == 'otp_on'){
                                            res.json({
                                                result: 'otp_on'
                                            });
                                        }else{
                                            if(send_data == 'otp_err'){
                                                erreur.push('OTP inexistant')
                                                res.json({
                                                    result: erreur
                                                });
                                            }else{
                                                res.json({
                                                    result: 'r'
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            erreur.push('Cet utilisateur bloqué')
                            res.json({
                                result: erreur
                            });
                        }
                    }else{
                        if(send_data == 0){
                            erreur.push('Compte introuvable')
                            res.json({
                                result: erreur
                            });
                        }else{
                            if(send_data == 1){
                                erreur.push('Solde insuffisant')
                                res.json({
                                    result: erreur
                                });
                            }else{
                                if(send_data == 2){
                                    erreur.push('Le montant rentrer est insuffisant')
                                    res.json({
                                        result: erreur
                                    });
                                }else{
                                    if(send_data == 'otp_on'){
                                        res.json({
                                            result: 'otp_on'
                                        });
                                    }else{
                                        if(send_data == 'otp_err'){
                                            erreur.push('OTP inexistant')
                                            res.json({
                                                result: erreur
                                            });
                                        }else{
                                            res.json({
                                                result: 'r'
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    res.json({
                        result: erreur
                    });
                }
            }catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },  
    demande_solde:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let dataRequest= req.body,
                    erreur     = []
                
                if(helperServices.presence(dataRequest.compte)) erreur.push('Merci de saisir le numéro de compte')
                else{
                    if(helperServices.presence(dataRequest.devise)) erreur.push('Merci de choisir la devise')
                }
                if(erreur==''){
                    let send_data = await agenceService.solde_membre(dataRequest)

                    if(send_data == 'cmt_null'){
                        erreur.push('Compte introuvable')
                        res.json({
                            result: erreur
                        });
                    }else{
                        res.json({
                            result: 'r',
                            solde :send_data
                        });
                    }
                }else{
                    res.json({
                        result: erreur
                    });
                }
            }catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_creance:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.rep_creance()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    send_credit:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let ancien_temoin = false,
                    dataRequest   = req.body,
                    erreur        = []

                if(dataRequest.id_temoin) ancien_temoin = true
                
                if(helperServices.presence(dataRequest.nom_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Nom')
                else{
                    if(helperServices.taille(dataRequest.prenom_temoin,15) && ancien_temoin==false) erreur.push('La taille du prénom doit être inférieure ou égale à 15')
                    else{
                        if(helperServices.letter_beginning(dataRequest.prenom_temoin) && ancien_temoin==false) erreur.push('Le prénom doit commencer par une lettre')
                        else{
                            if(helperServices.letter_beginning(dataRequest.nom_temoin) && ancien_temoin==false) erreur.push('Le nom doit commencer par une lettre')
                            else{
                                if(helperServices.presence(dataRequest.nom) && ancien_temoin==false) erreur.push('Merci de remplir le champ Nom')
                                else{
                                    if(helperServices.taille(dataRequest.prenom_temoin,15) && ancien_temoin==false) erreur.push('La taille du prénom doit être inférieure ou égale à 15')
                                    else{
                                        if(helperServices.letter_beginning(dataRequest.postnom_temoin) && ancien_temoin==false) erreur.push('Le postnom doit commencer par une lettre')
                                        else{
                                            if(helperServices.taille(dataRequest.postnom_temoin,15) && ancien_temoin==false) erreur.push('La taille du postnom doit être inférieure ou égale à 15')
                                            else{
                                                if(helperServices.presence(dataRequest.postnom_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Postnom')
                                                else{
                                                    if(helperServices.presence(dataRequest.province_temoin) && ancien_temoin==false) erreur.push('Merci de choisir la Province')
                                                    else{
                                                        if(helperServices.presence(dataRequest.sexe_temoin) && ancien_temoin==false) erreur.push('Merci de choisir le Sexe')
                                                        else{
                                                            if(helperServices.presence(dataRequest.adresse_physique_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Adresse')
                                                            else{
                                                                if(helperServices.taille(dataRequest.adresse_physique_temoin,30) && ancien_temoin==false) erreur.push('La taille de l\'adresse doit être inférieure ou égale à 30')
                                                                else{
                                                                    if(helperServices.presence(dataRequest.date_naissance_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Date de naissance')
                                                                    else{
                                                                        if(helperServices.presence(dataRequest.telephone_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Téléphone')    
                                                                        else{
                                                                            if(helperServices.presence(dataRequest.email) && ancien_temoin==false) erreur.push('Merci de remplir le champ Adresse Electronique')
                                                                            else{
                                                                                if(helperServices.date_valid(dataRequest.date_naissance_temoin) && ancien_temoin==false) erreur.push('L\'utilisateur est mineur')     
                                                                                else{
                                                                                    if(helperServices.presence(dataRequest.lieu_naissance_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Lieu de naissance')
                                                                                    else{
                                                                                        if(helperServices.taille(dataRequest.lieu_naissance_temoin,15) && ancien_temoin==false) erreur.push('Le champ Lieu de naissance doit avoir une taille inférieure ou égale à 15')
                                                                                        else{
                                                                                            if(helperServices.letter_beginning(dataRequest.lieu_naissance_temoin) && ancien_temoin==false) erreur.push('Le lieu de naissance doit commencer par une lettre')
                                                                                            else{
                                                                                                if(helperServices.presence(dataRequest.type_piece_temoin) && ancien_temoin==false) erreur.push('Merci de choisir un Type de pièce d\'identité')
                                                                                                else{
                                                                                                    if(helperServices.presence(dataRequest.sexe_temoin) && ancien_temoin==false) erreur.push('Merci de choisir le sexe')  
                                                                                                    else{
                                                                                                        if(helperServices.presence(dataRequest.etat_civil) && ancien_temoin==false) erreur.push('Merci de choisir l\'Etat-civil')     
                                                                                                        else{
                                                                                                            if(helperServices.presence(dataRequest.numero_piece_temoin) && ancien_temoin==false) erreur.push('Merci de remplir le champ Numéro pièce d\'identité') 
                                                                                                            else{
                                                                                                                if(helperServices.content_letter(dataRequest.adresse_physique_temoin) && ancien_temoin==false) erreur.push('L\'adresse physique doit comporter au moins une lettre ') 
                                                                                                                else{
                                                                                                                    if(dataRequest.montant =='') erreur.push('Merci de remplir le champ Montant') 
                                                                                                                    else{
                                                                                                                        if(dataRequest.devise =='') erreur.push('Merci de choisir la devise') 
                                                                                                                        else{
                                                                                                                            if(dataRequest.delai =='') erreur.push('Merci de remplir le champ delai') 
                                                                                                                            else{
                                                                                                                                if(await personnelService.check_email(dataRequest.email) !='' ) erreur.push('Cette adresse email est déjà utilisée ')
                                                                                                                                else{
                                                                                                                                    if(await personnelService.check_telephone(dataRequest.telephone_temoin) !='' ) erreur.push('Ce numéro de téléphone est déjà utilisé')
                                                                                                                                }
                                                                                                                            }   
                                                                                                                        }
                                                                                                                    }
                                                                                                                }   
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(erreur==''){
                    let msg = await agenceService.send_credit(req.body,req.session.org)
                    if(msg == 'banni'){
                        erreur.push('Ce membre est bannit de sa structure')
                        res.json({
                            result: erreur
                        });
                    }else{
                        if(msg == 'dette'){
                            erreur.push('Ce membre a une dette non soldé')
                            res.json({
                                result: erreur
                            });
                        }else{
                            res.json({
                                result: 'r'
                            });
                        }
                    }
                }else{
                    res.json({
                        result: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    create:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let bodyRequest = req.body,
                    erreur=[]
                if(helperServices.presence(bodyRequest.denomination)) erreur.push('Merci de saisir la denomination')
                else{
                    if(helperServices.letter_beginning(bodyRequest.denomination)) erreur.push('La denomination doit commencer par une lettre')
                    else{
                        if(helperServices.taille(bodyRequest.denomination,30)) erreur.push('La taille de la denomination doit être inférieure ou égale à 30')
                        else{
                                if(helperServices.taille(bodyRequest.ref_parcelle,15)) erreur.push('La taille de la référence doit être inférieure ou égale à 15')
                                else{
                                    if(helperServices.presence(bodyRequest.ref_parcelle)) erreur.push('Merci de saisir la référence') 
                                    else{
                                        if(helperServices.presence(bodyRequest.commune)) erreur.push('Merci de choisir la commune')
                                        else{
                                            if(helperServices.taille(bodyRequest.commune,20)) erreur.push('Merci de choisir la commune') 
                                            else{
                                                if(helperServices.taille(bodyRequest.telephone,15)) erreur.push('La taille du numéro téléphonique doit être inférieure ou égale à 15') 
                                                else{
                                                    if(helperServices.presence(bodyRequest.telephone)) erreur.push('Merci de choisir le numéro téléphonique') 
                                                    else{
                                                        if(helperServices.presence(bodyRequest.avenue)) erreur.push('Merci de saisir l\'avenue')
                                                        else{
                                                            if(helperServices.taille(bodyRequest.avenue,20)) erreur.push('La taille de l\'avanue doit être inférieure ou égale à 20')
                                                            else{
                                                                if(helperServices.presence(bodyRequest.quartier)) erreur.push('Merci de saisir le quartier')
                                                                else{
                                                                    if(helperServices.taille(bodyRequest.quartier,15)) erreur.push('La taille de du quartier doit être inférieure ou égale à 20')
                                                                    else{
                                                                        if(helperServices.letter_beginning(bodyRequest.avenue)) erreur.push('L\'avenue doit commencer par une lette')
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                    }
                }
                if(erreur==''){
                    res.json({result:await agenceService.create(bodyRequest)});
                }else{
                    res.json({
                        result: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    search_compte:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.search_compte(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    repertoire:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.repertoire()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    rep_transaction:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.transac(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    create_poucentage_depot:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.create_poucentage_depot(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    select_poucentage_depot:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.select_poucentage()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    send_pourcentage:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.send_pourcentage(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    on_agence:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let id_agence = await agenceService.on_agence(req.body)
                if(req.session.org == id_agence[0].id){
                    res.json({
                        result: await agenceService.on_agence(req.body),
                        disabled: false
                    });
                }else{
                    res.json({
                        result: await agenceService.on_agence(req.body),
                        result1: true
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    update:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                let bodyRequest = req.body,
                    erreur=[]

                if(helperServices.presence(bodyRequest.denomination)) erreur.push('Merci de saisir la denomination')
                else{
                    if(helperServices.letter_beginning(bodyRequest.denomination)) erreur.push('La denomination doit commencer par une lettre')
                    else{
                        if(helperServices.taille(bodyRequest.denomination,30)) erreur.push('La taille de la denomination doit être inférieure ou égale à 30')
                        else{
                            if(helperServices.taille(bodyRequest.ref_parcelle,15)) erreur.push('La taille de la référence doit être inférieure ou égale à 15')
                            else{
                                if(helperServices.presence(bodyRequest.ref_parcelle)) erreur.push('Merci de saisir la référence') 
                                else{
                                    if(helperServices.presence(bodyRequest.commune)) erreur.push('Merci de choisir la commune')
                                    else{
                                        if(helperServices.taille(bodyRequest.commune,20)) erreur.push('Merci de choisir la commune') 
                                        else{
                                            if(helperServices.taille(bodyRequest.telephone,15)) erreur.push('La taille du numéro téléphonique doit être inférieure ou égale à 15') 
                                            else{
                                                if(helperServices.presence(bodyRequest.telephone)) erreur.push('Merci de choisir le numéro téléphonique') 
                                                else{
                                                    if(helperServices.presence(bodyRequest.avenue)) erreur.push('Merci de saisir l\'avenue')
                                                    else{
                                                        if(helperServices.taille(bodyRequest.avenue,20)) erreur.push('La taille de l\'avanue doit être inférieure ou égale à 20')
                                                        else{
                                                            if(helperServices.presence(bodyRequest.quartier)) erreur.push('Merci de saisir le quartier')
                                                            else{
                                                                if(helperServices.taille(bodyRequest.quartier,15)) erreur.push('La taille de du quartier doit être inférieure ou égale à 20')
                                                                else{
                                                                    if(helperServices.letter_beginning(bodyRequest.avenue)) erreur.push('L\'avenue doit commencer par une lette')
                                                                    else{
                                                                        if(helperServices.valid_telephone(bodyRequest.telephone)) erreur.push('Le numéro de téléphone doit être saisi sous le format +243XXXXXXXXX')
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if(erreur==''){
                    let respon = await agenceService.update(req.body,req.session.id_compte)
                    if(respon =='r'){
                        res.json({
                            result:'r'
                        });
                    }else{
                        if(respon =='null'){
                            erreur.push('Aucune mise à jour n\'est effectuée')
                            res.json({
                                result:erreur
                            });
                        }
                    }
                }else{
                    res.json({
                        result: erreur
                    });
                }
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    on_transaction:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.on_transaction(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }, 
    update_transaction:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.update_transaction(req.body)});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_province:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.rep_province()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_type_piece:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.rep_type_piece()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_type_membre:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({
                    result:await agenceService.rep_type_membre(), 
                    result2:await agenceService.rep_type_membre_partenaire()
                });
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    },
    rep_etat_civil:async (req,res)=>{
        if(typeof req.session.org !== 'undefined' && typeof req.session.pseudo !== 'undefined' && typeof req.session.mdp !== 'undefined' && typeof req.session.id_compte !== 'undefined')  {
            try {
                res.json({result:await agenceService.rep_etat_civil()});
            } catch (error) {
                res.send('Erreur '+ error)
            }
        }else{
            res.json({result : 'deconnexion'});
        }
    }
}