const {
    sequelize,
    Op,
    Agence,
    Monnaie_electronique,
    Depot,
    Retrait,
    Province,
    Transaction_opt,
    Creance, 
    Temoin, 
    User, 
    Transfer
} = require('../config/db');

const fs = require('fs')

const ShortUniqueId = require('short-unique-id');
const axios         = require('axios');
const securePin     = require("secure-pin");
const personnelService = require('./personnel.service');
module.exports={ 
    update_credit: async function (data){
        await Creance.update(
            { 
                etat:1
            }, 
            {
            where: { 
                id : data.id_credit 
            }
        });
        return await this.rep_creance()
    }, 
    check_pin: async (check_p)=>{
        const [check_pin, metadata_] = await sequelize.query("SELECT COUNT(*) n FROM partenaires",
        {
            replacements: { pin:check_p}
        }); 
        const check_pin_ = JSON.parse(JSON.stringify(check_pin))
        return check_pin_
    },
    generateotp: ()=>{
        return securePin.generatePinSync(4);
    },
    generateRefOperation: ()=>{
        const refOperationPartOne = new ShortUniqueId({ length: 4 });
        return refOperationPartOne.rnd();
    },
    nb_partenaire: async (data)=>{
        const [part, metadata_] = await sequelize.query("SELECT COUNT(*) n FROM partenaires"); 
        const part_ = JSON.parse(JSON.stringify(part))
        return part_[0].n
    },
    nb_credit: async ()=>{
        const [credit, metadata_] = await sequelize.query("SELECT COUNT(credits.id) n FROM credits WHERE credits.etat = 0"); 
        const credit_ = JSON.parse(JSON.stringify(credit))
        return credit_[0].n
    },
    somme_depot_par_agence_cdf: async (agence,user)=>{
        const [somme_depot_par_agence, metadata_] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots WHERE depots.id_user=:id_user AND depots.point_cash_id=:id_agence AND DATE_FORMAT(depots.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND depots.devise='CDF'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_depot_par_agence_ = JSON.parse(JSON.stringify(somme_depot_par_agence))
        return somme_depot_par_agence_[0].n
    },
    somme_depot_par_agence_usd: async (agence,user)=>{
        const [somme_depot_par_agence, metadata_] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots WHERE depots.id_user=:id_user AND depots.point_cash_id=:id_agence AND DATE_FORMAT(depots.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND depots.devise='USD'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_depot_par_agence_ = JSON.parse(JSON.stringify(somme_depot_par_agence))
        return somme_depot_par_agence_[0].n
    },
    somme_depot_par_agence_eur: async (agence,user)=>{
        const [somme_depot_par_agence, metadata_] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots WHERE depots.id_user=:id_user AND depots.point_cash_id=:id_agence AND DATE_FORMAT(depots.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND depots.devise='EUR'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_depot_par_agence_ = JSON.parse(JSON.stringify(somme_depot_par_agence))
        return somme_depot_par_agence_[0].n
    },
    somme_retrait_par_agence_cdf: async (agence,user)=>{
        const [somme_retrait_par_agence, metadata_] = await sequelize.query("SELECT SUM(retraits.montant_retire) n FROM retraits WHERE retraits.id_user=:id_user AND retraits.point_cash_id=:id_agence AND DATE_FORMAT(retraits.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND retraits.devise='CDF'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_retrait_par_agence_ = JSON.parse(JSON.stringify(somme_retrait_par_agence))
        return somme_retrait_par_agence_[0].n
    },
    somme_retrait_par_agence_usd: async (agence,user)=>{
        const [somme_retrait_par_agence, metadata_] = await sequelize.query("SELECT SUM(retraits.montant_retire) n FROM retraits WHERE retraits.id_user=:id_user AND retraits.point_cash_id=:id_agence AND DATE_FORMAT(retraits.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND retraits.devise='USD'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_retrait_par_agence_ = JSON.parse(JSON.stringify(somme_retrait_par_agence))
        return somme_retrait_par_agence_[0].n
    },
    somme_retrait_par_agence_eur: async (agence,user)=>{
        const [somme_retrait_par_agence, metadata_] = await sequelize.query("SELECT SUM(retraits.montant_retire) n FROM retraits WHERE retraits.id_user=:id_user AND retraits.point_cash_id=:id_agence AND DATE_FORMAT(retraits.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND retraits.devise='EUR'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_retrait_par_agence_ = JSON.parse(JSON.stringify(somme_retrait_par_agence))
        return somme_retrait_par_agence_[0].n
    },
    somme_transfert_par_agence_cdf: async (agence,user)=>{
        const [somme_transfert_par_agence, metadata_] = await sequelize.query("SELECT SUM(transferts.montant_envoye) n FROM transferts WHERE transferts.id_user=:id_user AND transferts.point_cash_id=:id_agence AND DATE_FORMAT(transferts.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND transferts.devise='CDF'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_transfert_par_agence_ = JSON.parse(JSON.stringify(somme_transfert_par_agence))
        return somme_transfert_par_agence_[0].n
    },
    somme_transfert_par_agence_usd: async (agence,user)=>{
        const [somme_transfert_par_agence, metadata_] = await sequelize.query("SELECT SUM(transferts.montant_envoye) n FROM transferts WHERE transferts.id_user=:id_user AND transferts.point_cash_id=:id_agence AND DATE_FORMAT(transferts.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND transferts.devise='USD'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_transfert_par_agence_ = JSON.parse(JSON.stringify(somme_transfert_par_agence))
        return somme_transfert_par_agence_[0].n
    },
    somme_transfert_par_agence_eur: async (agence,user)=>{
        const [somme_transfert_par_agence_eur, metadata_] = await sequelize.query("SELECT SUM(transferts.montant_envoye) n FROM transferts WHERE transferts.id_user=:id_user AND transferts.point_cash_id=:id_agence AND DATE_FORMAT(transferts.createdAt,'%d-%m-%Y')= DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(),'+00:00','+01:00'),'%d-%m-%Y') AND transferts.devise='EUR'",
        {
            replacements: { id_user:user, id_agence:agence}
        }); 
        const somme_transfert_par_agence_eur_ = JSON.parse(JSON.stringify(somme_transfert_par_agence_eur))
        return somme_transfert_par_agence_eur_[0].n
    },
    search_transact: async (data)=>{
        let transac_ = ''
        
        if(data.type == 1){
            if(data.type_operation == 'Depot'){
                const [transac, metadata] = await sequelize.query("SELECT DATE(depots.createdAt) dat,depots.id_user id_user,depots.montant_depose mont,depots.pourc_preleve pourc,depots.devise,depots.devise,users.* FROM depots INNER JOIN users ON users.id=depots.id_user WHERE DATE(depots.createdAt)=:date_",
                {
                    replacements: { date_:data.date_}
                }); 
                transac_ = JSON.parse(JSON.stringify(transac)) 
            }else{
                if(data.type_operation == 'Retrait'){
                    const [transac, metadata] = await sequelize.query("SELECT DATE(retraits.createdAt) dat,retraits.id_user id_user,retraits.montant_retire mont,retraits.pourc_preleve pourc,retraits.devise,retraits.devise,users.* FROM retraits INNER JOIN users ON users.id=retraits.id_user WHERE DATE(retraits.createdAt)=:date_",
                    {
                        replacements: { date_:data.date_}
                    }); 
                    transac_ = JSON.parse(JSON.stringify(transac)) 
                }else{
                    if(data.type_operation == 'Transfert'){
                        const [transac, metadata] = await sequelize.query("SELECT DATE(transferts.createdAt) dat,transferts.id_user id_user,transferts.montant_envoye mont,transferts.pourc_preleve pourc,transferts.devise,transferts.devise,users.* FROM transferts INNER JOIN users ON users.id=transferts.id_user WHERE DATE(transferts.createdAt)=:date_",
                        {
                            replacements: { date_:data.date_}
                        }); 
                        transac_ = JSON.parse(JSON.stringify(transac)) 
                    }
                }
            }
        }
        if(data.type == 2){
            const [check_ref1, metadata_1] = await sequelize.query("SELECT DATE(depots.createdAt) dat,depots.ref_operation ref,depots.id_user id_user,depots.montant_depose mont,depots.pourc_preleve pourc,depots.devise,users.* FROM depots INNER JOIN users ON users.id=depots.id_user WHERE CONCAT(MONTH(depots.createdAt),YEAR(depots.createdAt),DAY(depots.createdAt),MINUTE(depots.createdAt),HOUR(depots.createdAt),SECOND(depots.createdAt),depots.point_cash_id,depots.ref_operation)=:ref",
            {
                replacements: { ref:data.ref_operation }
            }); 
            transac_ = JSON.parse(JSON.stringify(check_ref1))
            if(transac_ == ''){
                const [transac1, metadata1] = await sequelize.query("SELECT DATE(retraits.createdAt) dat,retraits.ref_operation ref,retraits.id_user id_user,retraits.montant_retire mont,retraits.pourc_preleve pourc,retraits.devise,users.* FROM retraits INNER JOIN users ON users.id=retraits.id_user WHERE CONCAT(MONTH(retraits.createdAt),YEAR(retraits.createdAt),DAY(retraits.createdAt),MINUTE(retraits.createdAt),HOUR(retraits.createdAt),SECOND(retraits.createdAt),retraits.point_cash_id,retraits.ref_operation)=:ref",
                {
                    replacements: { ref:data.ref_operation}
                }); 
                transac_ = JSON.parse(JSON.stringify(transac1))
            }
            if(transac_ == ''){
                const [trans1, metada1] = await sequelize.query("SELECT DATE(transferts.createdAt) dat,transferts.ref_operation ref,transferts.id_user id_user,transferts.montant_envoye mont,transferts.pourc_preleve pourc,transferts.devise,users.* FROM transferts INNER JOIN users ON users.id=transferts.id_user WHERE CONCAT(MONTH(transferts.createdAt),YEAR(transferts.createdAt),DAY(transferts.createdAt),MINUTE(transferts.createdAt),HOUR(transferts.createdAt),SECOND(transferts.createdAt),transferts.point_cash_id,transferts.ref_operation)=:ref",
                {
                    replacements: { ref:data.ref_operation}
                }); 
                transac_ = JSON.parse(JSON.stringify(trans1))
            }
        }
        return transac_
    },
    agent_agence: async (agence)=>{
        const [agent_agence, metadata] = await sequelize.query("SELECT COUNT(users.id) n FROM users INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE type_employes.id=4 AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const agent_agence_ = JSON.parse(JSON.stringify(agent_agence)) 
        return agent_agence_[0].n
    },
    membre_actif: async ()=>{
        const [part, metada] = await sequelize.query("SELECT COUNT(DISTINCT users.id) n FROM membres INNER JOIN type_membres ON type_membres.id=membres.id_type_membre INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN users ON users.id=membres.id_user INNER JOIN compte_moneys ON compte_moneys.id_user=users.id WHERE type_membres.id=7",
        {
            replacements: { id_agence:agence}
        }),
        partenaire = JSON.parse(JSON.stringify(part))
        return partenaire[0].n
    },
    agent_terrain: async (agence)=>{
        const [agent_terrain, metadata] = await sequelize.query("SELECT COUNT(users.id) n FROM users INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE type_employes.id=8 AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const agent_terrain_ = JSON.parse(JSON.stringify(agent_terrain)) 
        return agent_terrain_[0].n
    },
    compte_epargne: async (agence)=>{
        const [epargne, metadata] = await sequelize.query("SELECT COUNT(compte_moneys.id) n FROM compte_moneys INNER JOIN users ON users.id=compte_moneys.id_user INNER JOIN employes ON employes.id_user=users.id INNER JOIN agences ON agences.id=employes.id_agence WHERE compte_moneys.type_compte='Epargne' AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const epargne_ = JSON.parse(JSON.stringify(epargne)) 
        return epargne_[0].n
    },
    compte_courant: async (agence)=>{
        const [courant, metadata] = await sequelize.query("SELECT COUNT(compte_moneys.id) n FROM compte_moneys INNER JOIN users ON users.id=compte_moneys.id_user INNER JOIN employes ON employes.id_user=users.id INNER JOIN agences ON agences.id=employes.id_agence WHERE compte_moneys.type_compte='Courant' AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const courant_ = JSON.parse(JSON.stringify(courant)) 
        return courant_[0].n
    },
    nb_gestionnaire_credit: async (agence)=>{
        const [user, metadata] = await sequelize.query("SELECT COUNT(users.id) n FROM users INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE type_employes.id=5 AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const users_ = JSON.parse(JSON.stringify(user)) 
        return users_[0].n
    },
    nb_gestionnaire_compte: async (agence)=>{
        const [user, metadata] = await sequelize.query("SELECT COUNT(users.id) n FROM users INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE type_employes.id=3 AND employes.id_agence=:id_agence",
        {
            replacements: { id_agence:agence}
        }); 
        const users_ = JSON.parse(JSON.stringify(user)) 
        return users_[0].n
    },
    create_monnaie:async function(data){
        await Monnaie_electronique.create({
            id_agence : data.agence,
        	montant   : data.montant,
        	devise    : data.devise
        });
        return 'r'
    },
    somme_monnaie_electronique: async (agence,devise)=>{
        const [somme_monn_electro, metadata_] = await sequelize.query("SELECT SUM(monnaie_electroniques.montant) n FROM monnaie_electroniques WHERE monnaie_electroniques.devise=:devise AND monnaie_electroniques.id_agence=:id_agence",
        {
            replacements: { id_agence:agence,devise:devise }
        }),
        somme_monn_electro_ = JSON.parse(JSON.stringify(somme_monn_electro))
        return somme_monn_electro_
    },
    somme_depot_monnaie_electronique: async (agence,devise)=>{
        const [somme_depot_monnaie_electronique, metadata] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots WHERE depots.devise=:devise AND depots.point_cash_id=:id_agence",
        {
            replacements: { id_agence:agence,devise:devise }
        }); 
        const somme_depot_monnaie_electronique_ = JSON.parse(JSON.stringify(somme_depot_monnaie_electronique))
        return somme_depot_monnaie_electronique_
    },
    somme_retrait_monnaie_electronique: async (agence,devise)=>{
        const [somme_retrait_monnaie_electronique, metada_] = await sequelize.query("SELECT SUM(retraits.montant_retire) n FROM retraits INNER JOIN users ON users.id=retraits.id_user INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE retraits.devise=:devise AND retraits.point_cash_id=:id_agence AND type_employes.id<>8",
        {
            replacements: { id_agence:agence,devise:devise }
        }),
        somme_retrait_monnaie_electronique_ = JSON.parse(JSON.stringify(somme_retrait_monnaie_electronique))
        return somme_retrait_monnaie_electronique_
    },
    solde_monnaie_electronique_agence: async function (agence,devise){

        let somme_monn_electro_ = await this.somme_monnaie_electronique(agence,devise),
            somme_retrait_ = await this.somme_retrait_monnaie_electronique(agence,devise),
            somme_depot_ = await this.somme_depot_monnaie_electronique(agence,devise),

            r1= (somme_monn_electro_[0].n == null) ? 0 : somme_monn_electro_[0].n,
            r2= (somme_retrait_[0].n == null) ? 0 : somme_retrait_[0].n,
            r3= (somme_depot_[0].n == null) ? 0 : somme_depot_[0].n

        return [(parseFloat(r1) + parseFloat(r2)) - parseFloat(r3)]
    },
    search_user_in_compte : async (id_us)=>{
        const [cmt, metada] = await sequelize.query("SELECT compte_moneys.id FROM compte_moneys WHERE compte_moneys.id_user=:id_user",
        {
            replacements: { id_user :  id_us}
        }),
        cmt_ = JSON.parse(JSON.stringify(cmt))
        return cmt_
    },
    search_otp : async (data,id_user)=>{
        const [search_otp, meta] = await sequelize.query("SELECT UTC_TIMESTAMP(),TIMESTAMPDIFF(SECOND,transaction_opts.createdAt, UTC_TIMESTAMP()) dif FROM transaction_opts WHERE transaction_opts.otp=:otp AND transaction_opts.user_id=:user ORDER BY transaction_opts.id DESC LIMIT 1",
        {
            replacements: { otp : data.otp, user:id_user}
        }),
        search_otp_ = JSON.parse(JSON.stringify(search_otp))
        return search_otp_
    },
    somme_depot : async (id_cmt,data)=>{
        const [somme_dep, m] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots INNER JOIN compte_moneys ON compte_moneys.id=depots.id_compte WHERE depots.id_compte=:id_compte AND depots.devise=:devise",
        {
            replacements: { id_compte : id_cmt, devise:data.devise}
        }),
        somme_dep_ = JSON.parse(JSON.stringify(somme_dep)) // Somme des dépôts

        const [somme_salaire, me] = await sequelize.query("SELECT SUM(paiement_charges.montant) n FROM paiement_charges INNER JOIN compte_moneys ON compte_moneys.id=paiement_charges.id_compte_monney WHERE paiement_charges.id_compte_monney=:id_compte",
        {
            replacements: { id_compte : id_cmt}
        }),
        somme_salaire_ = JSON.parse(JSON.stringify(somme_salaire)) // Somme salaire

        let r1 = 0,
            r2 = 0

        r1 = (somme_dep_[0].n == null) ? 0 : somme_dep_[0].n
        r2 = (somme_salaire_[0].n == null) ? 0 : somme_salaire_[0].n
        
        let somme = (parseFloat(r1) + parseFloat(r2))
        
        return somme
    },
    somme_depot_enregistre : async (id_us,data)=>{
        const [somme_depot_enregistre, m] = await sequelize.query("SELECT SUM(depots.montant_depose) n FROM depots WHERE depots.id_user=:id_user AND depots.devise=:devise",
        {
            replacements: { id_user : id_us, devise:data.devise}
        }),
        somme_depot_enregistre_ = JSON.parse(JSON.stringify(somme_depot_enregistre)) // Somme des dépôts
        return somme_depot_enregistre_
    },
    somme_retrait_enregistre : async (id_us,data)=>{
        const [somme_depot_enregistre, m] = await sequelize.query("SELECT SUM(retraits.montant_retire) n FROM retraits WHERE retraits.id_user=:id_user AND retraits.devise=:devise",
        {
            replacements: { id_user : id_us, devise:data.devise}
        }),
        somme_depot_enregistre_ = JSON.parse(JSON.stringify(somme_depot_enregistre)) // Somme des dépôts
        return somme_depot_enregistre_
    },
    somme_again_depot : async (id_us,data)=>{
        const [somme_gain_depot, mgain] = await sequelize.query("SELECT SUM((depots.montant_depose*depots.pourc_preleve)/100) n FROM depots INNER JOIN config_generales ON config_generales.id=depots.id_config_general WHERE depots.id_user=:id_user AND depots.devise=:devise",
        {
            replacements: { id_user : id_us, devise:data.devise}
        }),
        somme_gain_depot_ = JSON.parse(JSON.stringify(somme_gain_depot)) // Somme des gains emanent des dépôts
        return somme_gain_depot_
    },
    somme_achat_im : async (id_compt,data)=>{
        let somme_achat_im_ = ''

        if(data.devise == 'USD' || data.devise == 'EUR'){
            const [somme_achat_im, mgain] = await sequelize.query("SELECT SUM(config_generales.prix_im) n FROM vente_ims INNER JOIN config_generales ON config_generales.id=vente_ims.id_config_generale WHERE vente_ims.devise=:devise AND vente_ims.id_compte_money=:id_compte",
            {
                replacements: { id_compte : id_compt, devise:data.devise}
            })
            somme_achat_im_ = JSON.parse(JSON.stringify(somme_achat_im)) // Somme achat im USD and EUR
        }
        if(data.devise == 'CDF'){
            const [somme_achat_im, mgain] = await sequelize.query("SELECT SUM(config_generales.prix_im * config_generales.taux_change) n FROM vente_ims INNER JOIN config_generales ON config_generales.id=vente_ims.id_config_generale WHERE vente_ims.devise=:devise AND vente_ims.id_compte_money=:id_compte",
            {
                replacements: { id_compte : id_compt, devise:data.devise}
            })
            somme_achat_im_ = JSON.parse(JSON.stringify(somme_achat_im)) // Somme achat im CDF²
        }
        return somme_achat_im_
    },
    somme_transfert_recu : async (id_cmt,data)=>{
        const [somme_transfert_cdf_recu, meta] = await sequelize.query("SELECT SUM(transferts.montant_envoye) n FROM transferts INNER JOIN compte_moneys ON compte_moneys.id=transferts.fk_recipiendaire WHERE transferts.devise=:devise AND transferts.fk_recipiendaire=:id_compte",
        {
            replacements: { id_compte :  id_cmt, devise:data.devise}
        }), 
        somme_transfert_cdf_recu_ = JSON.parse(JSON.stringify(somme_transfert_cdf_recu)) // Somme des transferts reçus
        return somme_transfert_cdf_recu_
    },
    somme_retrait : async (id_cmt,data)=>{
        const [somme_retrait, met] = await sequelize.query("SELECT SUM(retraits.montant_retire + ((retraits.montant_retire*retraits.pourc_preleve)/100)) n FROM retraits INNER JOIN compte_moneys ON compte_moneys.id=retraits.id_compte WHERE retraits.devise=:devise AND retraits.id_compte=:id_compte",
        {
            replacements: { id_compte : id_cmt, devise:data.devise}
        }),
        somme_retrait_ = JSON.parse(JSON.stringify(somme_retrait)) // Somme des montants retirés + le frais de retrait 
        return somme_retrait_
    },
    somme_transfert_effectue : async (id_cmt,data)=>{
        const [somme_transfert_effectue, me] = await sequelize.query("SELECT (SUM(transferts.montant_envoye+((transferts.montant_envoye*transferts.pourc_preleve)/100))) n FROM transferts INNER JOIN compte_moneys ON compte_moneys.id=transferts.fk_expediteur WHERE transferts.devise=:devise AND transferts.fk_expediteur=:id_compte",
        {
            replacements: { id_compte : id_cmt,devise:data.devise}
        }),
        somme_transfert_effectue_ = JSON.parse(JSON.stringify(somme_transfert_effectue)) // Somme des transferts effectués - pourcentage transfert
        return somme_transfert_effectue_
    },
    retrocession_retrait : async (id_us,data)=>{
        const [retrocession_retrait, me] = await sequelize.query("SELECT SUM(((retraits.montant_retire*retraits.pourc_preleve)/100)/config_generales.retrocession_agent) n FROM retraits INNER JOIN config_generales ON config_generales.id=retraits.id_config_general WHERE retraits.id_user=:id_user AND retraits.devise=:devise",
        {
            replacements: { id_user : id_us,devise:data.devise}
        }),
        retrocession_retrait_ = JSON.parse(JSON.stringify(retrocession_retrait)) // Somme des retrocession
        return retrocession_retrait_
    },
    retrocession_transfert : async (id_us,data)=>{
        const [retrocession_transfert, me] = await sequelize.query("SELECT SUM(((transferts.montant_envoye*transferts.pourc_preleve)/100)/config_generales.retrocession_agent) n FROM transferts INNER JOIN config_generales ON config_generales.id=transferts.id_config_general WHERE transferts.id_user=:id_user AND transferts.devise=:devise",
        {
            replacements: { id_user : id_us,devise:data.devise}
        }),
        retrocession_transfert_ = JSON.parse(JSON.stringify(retrocession_transfert)) // Somme des retrocession
        return retrocession_transfert_
    },
    solde_membre : async function (data){
        let id_compt= await this.search_compte(data),
            gain = 0,
            msg
            
        if(id_compt !=''){ // Vérification existance du compte
            
            let id_user = await this.search_user_in_compte(id_compt[0].id_user),
                somme_depot_effectue = await this.somme_depot(id_compt[0].id_cmt,data),
                somme_gain_depot = await this.somme_again_depot(id_compt[0].id_user,data),
                somme_transfert_recu_ = await this.somme_transfert_recu(id_compt[0].id_cmt,data),
                somme_retrait = await this.somme_retrait(id_compt[0].id_cmt,data),
                somme_transfert_effectue = await this.somme_transfert_effectue(id_compt[0].id_cmt,data),
                retrocession_retrait = await this.retrocession_retrait(id_compt[0].id_user,data),
                retrocession_transfert = await this.retrocession_transfert(id_compt[0].id_user,data),
                somme_depot_enregistre = await this.somme_depot_enregistre(id_compt[0].id_user,data),
                somme_retrait_enregistre = await this.somme_retrait_enregistre(id_compt[0].id_user,data),
                somme_achat_im = await this.somme_achat_im(id_compt[0].id_cmt,data),

                r1= (somme_depot_effectue == null) ? 0 : somme_depot_effectue,
                r2= (somme_transfert_recu_[0].n == null) ? 0 : somme_transfert_recu_[0].n,
                r3= (somme_retrait[0].n == null) ? 0 : somme_retrait[0].n,
                r4= (somme_transfert_effectue[0].n == null) ? 0 : somme_transfert_effectue[0].n,
                r5= (retrocession_retrait[0].n == null) ? 0 : retrocession_retrait[0].n,
                r6= (retrocession_transfert[0].n == null) ? 0 : retrocession_transfert[0].n,
                r7= (somme_depot_enregistre[0].n == null) ? 0 : somme_depot_enregistre[0].n,
                r8= (somme_achat_im[0].n == null) ? 0 : somme_achat_im[0].n,
                r9= (somme_retrait_enregistre[0].n == null) ? 0 : somme_retrait_enregistre[0].n
            
            if(id_compt[0].membre_agence){ // Si c'est un membre de l'agence
                if(id_user[0].id == id_compt[0].id_cmt){ // On verifie si c'est le premier compte pour y ajouter le gain de dépôts effectués
                    gain = (somme_gain_depot[0].n) ? somme_gain_depot[0].n : 0
                    console.log("***********************************************************dépôt "+r1)
                    console.log("************************************************************gain "+ gain )
                    console.log("***********************************************************retrait "+r3)
                }else{ // les deuxième comptes ne beneficient pas des retrocessions ni des poucentages de dépôt
                    r5=0
                    r6=0
                }
            // Nb.: la retrocession des retrait et transfert, et le pourcentage de dépôt ne sont approvisionnés qu'on premier compte au cas où l'utilisateur en a deux. cfr. ligne 567-575
                if(id_compt[0].id_membre != 8){ // Si ce n'est pas un agent terrain
                    
                    msg = ((parseFloat(r1) + parseFloat(r2))) - (parseFloat(r3) + parseFloat(r4) ) // calcul solde Personnel, Agent agence, Gestionnaire des comptes, Gestionnaires des crédits, Administrateur
                }else{
                    if(id_compt[0].id_membre == 8){ // Si c'est un agent terrain

                        msg = ((parseFloat(r1) + parseFloat(r2) + parseFloat(r9) + parseFloat(gain) + parseFloat(r5) + parseFloat(r6))) - (parseFloat(r3) + parseFloat(r4)+ parseFloat(r7) ) // Calcul solde agent terrain
                    }
                }
            }else{
                if(id_compt[0].partenaire){ // Si c'est un partenaire
                    
                    console.log("****************************************************** dépôt effectué "+ r1)
                    console.log("****************************************************** transfert recu "+ r2)
                    console.log("****************************************************** retrait "+ r3)
                    console.log("****************************************************** transfert effectué "+ r4)
                    console.log("****************************************************** retrocession retrait "+ r5)
                    console.log("****************************************************** retrocession transfert "+ r6)
                    
                    msg = (parseFloat(r1) + parseFloat(r2)) - (parseFloat(r3) + parseFloat(r4) + parseFloat(r8) ) // Calcul solde partenaire
                }else{ // Si c'est un membre externe
                    msg = (parseFloat(r1) + parseFloat(r2)) - (parseFloat(r3) + parseFloat(r4) ) // Calcul solde membre externe
                }
            }
        }else msg = 'cmt_null'
        return msg
    },
    formatage_compte:async function(data){
        try{
            let compte = data,
                compte_converti = ''
            for (let i = 0; i < compte.length; i++) {
                if(i >= 4 && i <=11) compte_converti += '*'
                else compte_converti += compte[i]
            }
            return compte_converti
        }catch (error) {
            res.send('Erreur '+ error)
        }
    },
    nouveau_transfert:async function(data,agence,user){
        try{
            let compte_exp = {
                    compte:data.exp,
                    devise:data.devise
                },
                compte_rec = {
                    compte:data.rec,
                    devise:data.devise
                },
                id_compte_exp = await this.search_compte(compte_exp),
                id_compte_rec = await this.search_compte(compte_rec),
                config        = await this.select_poucentage(),
                msg           = 1,
                montant_min   = await this.montant_minimum(data)

            if(data.state_otp != true){
                let transfert_otp = await Transaction_opt.create({
                    otp    : this.generateotp(),
                    user_id:user
                });
                msg=2

                /* OTP Expéditeur */
                
                let numPhone1=id_compte_exp[0].telephone,
                    message1=`Cher membre, veuillez confirmer votre transfert de : ${data.montant}        
                    votre OTP est le suivant: ${transfert_otp.dataValues.otp}`,
                    url1 = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone1}&textmessage=${message1}`;
                await axios.get(url1);
                
            }else{
                let search_otp_ = await this.search_otp(data,user),
                    validite=30,
                    existence_otp=(search_otp_[0].dif) ? true : false

                if(parseFloat(montant_min[0].f) <= parseFloat(data.montant)){ // Vérifier si le montant rentrer est supérieur ou égal au montant minimun
                    
                    let pourcentage_prelev = await this.select_frais_transfert(data),
                        montant_plus_frais = (parseFloat(data.montant) + ((parseFloat(data.montant)*parseFloat(pourcentage_prelev[0].f)) / 100)) // Montant transféré + frais
                    
                    if(existence_otp == true && (parseFloat(search_otp_[0].dif) <= validite) ){
                        if(await this.solde_membre(compte_exp) =='cmt_null' ) msg = 3 // Vérification existence compte expéditaire
                        else{
                            if(await this.solde_membre(compte_rec) =='cmt_null' ) msg = 4 // Vérification existence compte recipiendaire
                            else{
                                if(parseFloat(await this.solde_membre(compte_exp)) > parseFloat(montant_plus_frais)){ // Vérification solde
                                    let trans = await Transfer.create({
                                        confirmation     : 1,
                                        fk_expediteur    : id_compte_exp[0].id_cmt,
                                        fk_recipiendaire : id_compte_rec[0].id_cmt,
                                        montant_envoye   : data.montant,
                                        pourc_preleve    : pourcentage_prelev[0].f,
                                        point_cash_id    : agence,
                                        ref_operation    : 'T-'+this.generateRefOperation(),
                                        id_user          : user,
                                        devise           : data.devise,
                                        annule           : 0,
                                        id_config_general: config[0].id
                                    });
                                    msg = 5

                                    
                                console.log('transfert ************************************************* '+ await this.get_formate_ref_opertion(trans.dataValues.id,'T'))

                                    if(trans.dataValues.montant_envoye){

                                    /* OTP Expéditeur */
                                       
                                        let numPhone=id_compte_exp[0].telephone,
                                            message=`Transfert effectué sur ${id_compte_rec[0].prenom+' '+id_compte_rec[0].nom} Montant : ${await this.formatage_depot(trans.dataValues.montant_envoye) + ' '+data.devise}    
                                        Compte:  ${await this.formatage_compte(id_compte_rec[0].compte)} Frais: ${await this.formatage_frais((trans.dataValues.montant_envoye * trans.dataValues.pourc_preleve)) + ' '+data.devise}
                                        Solde : ${await this.formatage_solde(await this.solde_membre(compte_exp)) +' '+trans.dataValues.devise} Ref : ${await this.get_formate_ref_opertion(trans.dataValues.id) + trans.dataValues.ref_operation}
                                        Merci.`,
                                        url = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone}&textmessage=${message}`;
                                        await axios.get(url);
                                        
                                    /* OTP Recepteur */
                                       
                                        let numPhone2=id_compte_rec[0].telephone,
                                            message2=`Vous avez reçu de ${id_compte_exp[0].prenom+' '+id_compte_exp[0].nom} ${await this.formatage_depot(trans.dataValues.montant_envoye) + ' '+data.devise}    
                                        Compte:  ${await this.formatage_compte(id_compte_exp[0].compte)} Solde : ${await this.formatage_solde(await this.solde_membre(compte_rec)) +' '+trans.dataValues.devise}
                                        Ref : ${trans.dataValues.ref_operation}
                                        Merci.`,
                                        url2 = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone2}&textmessage=${message2}`;
                                        await axios.get(url2);
                                        
                                    }
                                }else msg = 6
                            }
                        }
                    }else msg=7
                } else msg = 8
            }
            return msg
        }catch (error) {
            res.send('Erreur '+ error)
        }
    },
    formatage_frais:async function(data){
        try{
            let frais1 = ""+ Math.trunc(parseFloat((data) / 100)),
                frais2 = parseFloat((data) / 100).toFixed(2),
                frais_revise = '',
                partie_decimal = '',
                frais_revise1 = ''

                partie_decimal += '.'+ frais2[frais2.length-2] + frais2[frais2.length-1]
            
            if(frais1.length >3){
                for (let i = frais1.length-1; i >= 0; i--) frais_revise += frais1[i]
                for (let i = frais_revise.length-1; i >= 0; i--) {
                    let mod = (i+1) % 3
                    if(mod == 0 && parseFloat(frais_revise.length-1) != i ) frais_revise1 += ','+frais_revise[i]
                    else frais_revise1 += frais_revise[i]
                }
                frais_revise1 = frais_revise1 + partie_decimal
            }else {
                for (let i = 0; i < frais2.length; i++) frais_revise1 += frais2[i]
                frais_revise1 = parseFloat(frais_revise1).toFixed(2)
            }
            return frais_revise1
        }catch (error) {
            res.send('Erreur '+ error)
        }
    },
    nouveau_retrait:async function(data,agence,user){
        try{
            let id_compte   = await this.search_compte(data),
                config      = await this.select_poucentage(),
                msg         = 14,
                montant_min = await this.montant_minimum(data)
                
            if(data.state_otp != true){
                let retrait_otp = await Transaction_opt.create({
                    otp    : this.generateotp(),
                    user_id:user
                });
                msg='otp_on'
                
                let numPhone=id_compte[0].telephone,
                    message=`Cher membre, veuillez confirmer votre retrait de : ${data.montant+ ' '+data.devise}        
                    votre OTP est le suivant: ${retrait_otp.dataValues.otp}`,
                    url = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone}&textmessage=${message}`;
                await axios.get(url);
                
            }else{
                let search_otp_ = await this.search_otp(data,user),
                    validite=30,
                    existence_otp=(search_otp_[0].dif) ? true : false
                
                if(existence_otp == true && (parseFloat(search_otp_[0].dif) <= validite) ){  
                    if(await this.solde_membre(data) =='cmt_null' ) msg = 0
                    else{
                        if(parseFloat(montant_min[0].f) <= parseFloat(data.montant)){
                            let pourcentage_prelev = await this.select_frais_retrait(data),
                                montant_plus_frais = (parseFloat(data.montant) + ((parseFloat(data.montant)*parseFloat(pourcentage_prelev[0].f)) / 100)) // Montant rétiré + frais

                            if(parseFloat(await this.solde_membre(data)) > parseFloat(montant_plus_frais)){
                                let retrait = await Retrait.create({
                                    confirmation     : 1,
                                    montant_retire   : data.montant,
                                    pourc_preleve    : pourcentage_prelev[0].f,
                                    id_compte        : id_compte[0].id_cmt,
                                    point_cash_id    : agence,
                                    ref_operation    : "R-"+this.generateRefOperation(),
                                    id_user          : user,
                                    devise           : data.devise,
                                    annule           : 0,
                                    id_config_general: config[0].id
                                });

                                let solde_formate = await this.formatage_solde(await this.solde_membre(data)), // Formatage solde
                                    retrait_formate = await this.formatage_depot(retrait.dataValues.montant_retire), // Formatage retrait
                                    compte_converti = await this.formatage_compte(id_compte[0].compte), // Formatage compte
                                    frais_converti  = await this.formatage_frais((retrait.dataValues.montant_retire * retrait.dataValues.pourc_preleve)) // Formatage frais
                                
                                if(retrait.dataValues.ref_operation){
                                    let numPhone=id_compte[0].telephone,
                                        message =`Retrait effectue sur        
                                        ${' '+id_compte[0].prenom+ ' '+id_compte[0].nom}  
                                        Compte : ${compte_converti}        
                                        Montant : ${retrait_formate + ' '+data.devise}      
                                        Frais : ${frais_converti + ' '+data.devise}  
                                        Solde : ${solde_formate + ' '+data.devise}       
                                        Ref : ${await this.get_formate_ref_opertion(retrait.dataValues.id,'R')}       
                                        Merci.`,
                                        url = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone}&textmessage=${message}`;
                                    await axios.get(url);
                                    msg='r'
                               }
                            }else{
                                msg = 1
                            }
                        }else msg = 2
                    }
                }else msg='otp_err'
            }
            return msg
        }catch (error) {
            res.send('Erreur '+ error)
        }
    },
    montant_minimum: async (data)=>{
        const [frais, metadata_] = await sequelize.query("SELECT MIN(config_transactions.minimum) f FROM config_transactions WHERE config_transactions.devise=:devise AND config_transactions.type=:type",
        {
            replacements: { type:data.type,devise:data.devise }
        }); 
        const frais_ = JSON.parse(JSON.stringify(frais))
        return frais_
    },
    select_frais_depot: async (data)=>{
        const [frais, metadata_] = await sequelize.query("SELECT config_transactions.frais f FROM config_transactions WHERE config_transactions.minimum = (SELECT MAX(config_transactions.minimum) FROM config_transactions WHERE config_transactions.minimum <=:val AND config_transactions.devise=:devise AND config_transactions.type='Depot') AND config_transactions.devise=:devise AND config_transactions.type='Depot'",
        {
            replacements: { val:data.montant,devise:data.devise }
        }); 
        const frais_ = JSON.parse(JSON.stringify(frais))
        return frais_
    },
    select_frais_retrait: async (data)=>{
        const [frais, metadata_] = await sequelize.query("SELECT config_transactions.frais f FROM config_transactions WHERE config_transactions.minimum = (SELECT MAX(config_transactions.minimum) FROM config_transactions WHERE config_transactions.minimum <=:val AND config_transactions.devise=:devise AND config_transactions.type='Retrait') AND config_transactions.devise=:devise AND config_transactions.type='Retrait'",
        {
            replacements: { val:data.montant,devise:data.devise }
        }); 
        const frais_ = JSON.parse(JSON.stringify(frais))
        return frais_
    },
    select_frais_transfert: async (data)=>{
        const [frais, metadata_] = await sequelize.query("SELECT config_transactions.frais f FROM config_transactions WHERE config_transactions.minimum = (SELECT MAX(config_transactions.minimum) FROM config_transactions WHERE config_transactions.minimum <=:val AND config_transactions.devise=:devise AND config_transactions.type='Transfert') AND config_transactions.devise=:devise AND config_transactions.type='Transfert'",
        {
            replacements: { val:data.montant,devise:data.devise }
        }); 
        const frais_ = JSON.parse(JSON.stringify(frais))
        return frais_
    },
    formatage_depot:async function(montant){
        try{
            let mont = montant,
                montant_revise = '',
                montant_revise1 = ''

        if(mont.length >3){
            for (let i = mont.length-1; i >= 0; i--) montant_revise += mont[i]
            for (let i = montant_revise.length-1; i >= 0; i--) {
                let mod = (i+1) % 3
                if(mod == 0 && parseFloat(montant_revise.length-1) != i ) montant_revise1 += ','+mont[i]
                else montant_revise1 += montant_revise[i]
            }
        }else montant_revise1 = mont
        montant_revise1 = montant_revise1 + '.00'
        return montant_revise1
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    formatage_solde:async function(solde){
        try{
            let solde1 = ""+Math.trunc(solde),
                solde2 = parseFloat(solde).toFixed(2),
                partie_decimal = '.'
                solde_revise = '',
                solde_revise1 = ''
            
            partie_decimal += solde2[solde2.length-2] + solde2[solde2.length-1]
            
            if(solde1.length >3){
                for (let i = solde1.length-1; i >= 0; i--) solde_revise1 += solde1[i]
                for (let i = solde_revise1.length-1; i >= 0; i--) {
                    let mod = (i+1) % 3
                    if(mod == 0 && parseFloat(solde_revise1.length-1) != i ) solde_revise += ','+solde_revise1[i]
                    else solde_revise += solde_revise1[i]
                }
                solde_revise = solde_revise + partie_decimal
            }else solde_revise = solde2
            return solde_revise
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    get_one_depot:async function(agence){
        try{
            const [depot, metadata_] = await sequelize.query("SELECT depots.* FROM depots WHERE depots.id=:id",
            {
                replacements: { id:agence }
            }); 
            const depot_ = JSON.parse(JSON.stringify(depot))
            return depot_
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    get_formate_ref_opertion:async function(id_operation,operation){
        try{
            let transac_ = ''
            if(operation == 'D'){
                const [send_ref, metadata_1] = await sequelize.query("SELECT CONCAT(MONTH(depots.createdAt),YEAR(depots.createdAt),DAY(depots.createdAt),MINUTE(depots.createdAt),HOUR(depots.createdAt),SECOND(depots.createdAt),depots.point_cash_id,depots.ref_operation) ref FROM depots WHERE depots.id=:id",
                {
                    replacements: { id:id_operation }
                }); 
                transac_ = JSON.parse(JSON.stringify(send_ref))
            }else{ 
                if(operation == 'R'){
                    const [send_ref1, metadata2] = await sequelize.query("SELECT CONCAT(MONTH(retraits.createdAt),YEAR(retraits.createdAt),DAY(retraits.createdAt),MINUTE(retraits.createdAt),HOUR(retraits.createdAt),SECOND(retraits.createdAt),retraits.point_cash_id,retraits.ref_operation) ref FROM retraits WHERE retraits.id=:id",
                    {
                        replacements: { id:id_operation }
                    }); 
                    transac_ = JSON.parse(JSON.stringify(send_ref1)) 
                }else{
                    if(operation == 'T'){
                        const [send_ref2, metada1] = await sequelize.query("SELECT CONCAT(MONTH(transferts.createdAt),YEAR(transferts.createdAt),DAY(transferts.createdAt),MINUTE(transferts.createdAt),HOUR(transferts.createdAt),SECOND(transferts.createdAt),transferts.point_cash_id,transferts.ref_operation) ref FROM transferts WHERE transferts.id =:id",
                        {
                            replacements: { id:id_operation }
                        }); 
                        transac_ = JSON.parse(JSON.stringify(send_ref2)) 
                    }
                }
            }
            return transac_[0].ref
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    nouveau_depot:async function(data,agence,user){
        try{
            let id_compte          = await this.search_compte(data),
                config             = await this.select_poucentage(),
                msg                = '',
                pourcentage_prelev = await this.select_frais_depot(data),
                montant_min        = await this.montant_minimum(data)

            if(id_compte != ''){
                if(parseFloat(montant_min[0].f) <= parseFloat(data.montant)){
                    if((await this.solde_monnaie_electronique_agence(agence,data.devise)  >= parseFloat(data.montant))){ // vérification solde
                        let depot = await Depot.create({
                            confirmation     : 1,
                            montant_depose   : data.montant,
                            pourc_preleve    : pourcentage_prelev[0].f,
                            id_compte        : id_compte[0].id_cmt,
                            point_cash_id    : agence,
                            ref_operation    : "D-"+this.generateRefOperation(),
                            id_user          : user,
                            devise           : data.devise,
                            annule           : 0,
                            id_config_general: config[0].id
                        });

                        let depot_formate = await this.formatage_depot(depot.dataValues.montant_depose), // Formatage Montant déposé
                            solde_formate = await this.formatage_solde(await this.solde_membre(data)), // Formatage solde
                            compte_converti = await this.formatage_compte(id_compte[0].compte)
                            
                        
                        if(depot.dataValues.ref_operation){
                            let numPhone=id_compte[0].telephone,
                                message =`Depot effectue sur ${' '+id_compte[0].prenom+ ' '+id_compte[0].nom}  
                                Compte : ${compte_converti} Montant : ${depot_formate + ' '+data.devise}       
                                Solde : ${solde_formate + ' '+data.devise} Ref : ${ await this.get_formate_ref_opertion(depot.dataValues.id,'D' ) }       
                                Merci.`,
                                url = `https://api2.dream-digital.info/api/SendSMS?api_id=API42124386641&api_password=x3McB19tzd&sms_type=T&encoding=T&sender_id=LoanMe CD&phonenumber=${numPhone}&textmessage=${message}`;
                            await axios.get(url);
                            msg='r'
                        }
                    }else msg='err_solde'
                }else msg='min'

            }else msg='err_compte'
            return msg
        } catch (error) {
            res.send('Erreur '+ error)
        }
    },
    create:async function(data){
        await Agence.create({
            denomination : data.denomination,
            telephone    : data.telephone,
            avenue       : data.avenue,
            quartier     : data.quartier,
            numero_parcel: data.ref_parcelle,
            commune      : data.commune
        });
        return 'r'
    },
    repertoire:async function(){
        return await Agence.findAll();
    },
    search_compte:async function(data){
        let compte_ = ''
        const [compte, meta] = await sequelize.query("SELECT (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1))) compte,compte_moneys.id id_cmt,compte_moneys.id_user id_user,users.*,provinces.libelle lb,etat_civils.libelle eta,employes.id_type_employe id_membre,employes.id membre_agence FROM compte_moneys INNER JOIN users ON users.id=compte_moneys.id_user INNER JOIN provinces ON provinces.id=users.id_province INNER JOIN employes ON employes.id_user=users.id INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1)))=:compte",
        {
            replacements: { compte:data.compte }
        })
        compte_ = JSON.parse(JSON.stringify(compte)) // Membre de l'agence

        if(compte_==''){
            const [compte, meta] = await sequelize.query("SELECT (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1))) compte,compte_moneys.id id_cmt,compte_moneys.id_user id_user,users.*,provinces.libelle lb,etat_civils.libelle eta,membres.id_type_membre id_membre FROM compte_moneys INNER JOIN users ON users.id=compte_moneys.id_user INNER JOIN provinces ON provinces.id=users.id_province INNER JOIN membres ON membres.id_user=users.id INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1)))=:compte",
            {
                replacements: { compte:data.compte }
            })
            compte_ = JSON.parse(JSON.stringify(compte)) // Membre du Partenaire externe
        }
        if(compte_==''){
            const [compte, meta] = await sequelize.query("SELECT (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1))) compte,compte_moneys.id id_cmt,compte_moneys.id_user id_user,users.prenom,users.nom,users.post_nom,partenaires.telephone,provinces.libelle lb,etat_civils.libelle eta,partenaires.id partenaire,membres.id_type_membre id_membre_part_externe FROM compte_moneys INNER JOIN partenaires ON compte_moneys.id_partenaire=partenaires.id INNER JOIN partenaire_membres ON partenaire_membres.id_partenaire=partenaires.id INNER JOIN membres ON membres.id=partenaire_membres.id_membre INNER JOIN agences ON compte_moneys.id_agence=agences.id INNER JOIN users ON users.id=membres.id_user INNER JOIN provinces ON provinces.id=users.id_province INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1)))=:compte AND membres.id_type_membre=6",
            {
                replacements: { compte:data.compte }
            })
            compte_ = JSON.parse(JSON.stringify(compte)) // Partenaire
        }
        return compte_
    },
    rep_creance:async function(){
        const [creance, meta] = await sequelize.query("SELECT (CONCAT(LPAD(compte_moneys.id_agence,4,1),'-',LPAD(compte_moneys.id,11,1))) compte,credits.*,credits.id id_cr,temoins.*,config_generales.* FROM credits INNER JOIN temoins ON credits.id_temoin=temoins.id INNER JOIN compte_moneys ON compte_moneys.id=credits.id_compte_money INNER JOIN config_generales ON config_generales.id=credits.id_config_generale"),
            creance_ = JSON.parse(JSON.stringify(creance))
        return creance_
    },
    transac: async (dataTransaction)=>{
        let trans = await Transaction.findAll({
                where: { 
                    type:dataTransaction.type,
                    devise:dataTransaction.devise
                }
            })
        return trans
    },
    create_poucentage_depot: async (dataTransaction)=>{
        await Transaction.create({
            minimum:dataTransaction.minimum,
            maximum:dataTransaction.maximum,
            frais  :dataTransaction.frais,
            type   :"Depot",
            devise :dataTransaction.devise
        });
        return 'r'
    },
    select_poucentage: async ()=>{
        const [pourcentage, metadata_] = await sequelize.query("SELECT config_generales.* FROM config_generales ORDER BY config_generales.id DESC LIMIT 1"); 
        const pourcentage_ = JSON.parse(JSON.stringify(pourcentage))
        return pourcentage_
    },
    search_user_in_credit: async (compte)=>{
        const [search_user_in_cred, metadata_] = await sequelize.query("SELECT credits.* FROM credits WHERE credits.etat=0 AND credits.id_compte_money=:compt",
        {
            replacements: { compt:compte }
        }); 
        const search_user_in_cred_ = JSON.parse(JSON.stringify(search_user_in_cred))
        return search_user_in_cred_
    },
    send_credit: async function (data,agence){
        try{
            let pourcent = await this.select_poucentage(),
                msg='e',
                existence_solde_user = true,
                search_state_user
            
            if(await this.search_user_in_credit(data.id_cmt) != '') existence_solde_user = false

            if(existence_solde_user == true){ // l'utilisateur n'a pas de dette
                if(data.id_type != 1){ // Si c'est un compte individuel
                    search_state_user = await personnelService.membre_actif(data.id_user)
                }
                if(data.id_type == 1 || search_state_user != ''){ // Si c'est un compte partenaire ou un utilisateur non bannit
                    if(data.id_temoin == 0){ // Si c'est un nouveau temoin
                        await sequelize.transaction(async (t) => { 
                            let user = await User.create({
                                prenom              :data.prenom_temoin,
                                nom                 :data.nom_temoin,
                                post_nom            :data.postnom_temoin,
                                sexe                :data.sexe_temoin,
                                date_naissance      :data.date_naissance_temoin,
                                lieu_naissance      :data.lieu_naissance_temoin,
                                id_etat_civil       :data.etat_civil,
                                telephone           :data.telephone_temoin,
                                numero_piece        :data.numero_piece_temoin,
                                id_type_piece_ident :data.type_piece_temoin,
                                adresse_physique    :data.adresse_physique_temoin,
                                id_province         :data.province_temoin,
                                email               :data.email
                            }, { transaction: t });
                            let tem = await Temoin.create({
                                id_user : user.dataValues.id
                            }, { transaction: t });
                            await Creance.create({
                                id_compte_money    : data.id_cmt,
                                montant            : data.montant,
                                id_temoin          : tem.dataValues.id,
                                echance            : data.delai,
                                devise             : data.devise,
                                id_config_generale : pourcent[0].id,
                                id_agence          : agence
                            }, { transaction: t });
                        })
                        msg='r'
                    }else{
                        await sequelize.transaction(async (t) => { 
                            await Creance.create({
                                id_compte_money    : data.id_cmt,
                                montant            : data.montant,
                                id_temoin          : data.id_temoin,
                                echance            : data.delai,
                                devise             : data.devise,
                                id_config_generale : pourcent[0].id,
                                id_agence          : agence
                            }, { transaction: t });
                            msg='r'
                        }) 
                    }
                } else msg = 'banni'
            }else msg = 'dette'
            return msg
        }catch (erreur) {
            console.error("Erreur :", erreur);
        }
    },
    send_pourcentage: async (dataTransaction)=>{
        await Pourcentage.create({
            credit:dataTransaction.credit,
            agent:dataTransaction.agent
        });
        return 'r'
    },
    on_agence: async (data)=>{
        let agence = await Agence.findAll({
            where: { id : data.id }
        })
        return agence
    },
    check_agence_for_log: async (data)=>{
        const [check_agence, metadata_] = await sequelize.query("SELECT agences.id FROM agences WHERE agences.denomination=:den AND agences.numero_parcel=:num AND agences.commune=:commune AND agences.telephone=:tel AND agences.avenue=:av AND agences.quartier=:quartier",
        {
            replacements: { 
                den     :data.denomination, 
                num     :data.ref_parcelle,
                commune :data.commune,
                tel     :data.telephone,
                av      :data.avenue, 
                quartier:data.quartier
            }
        }); 
        const check_agence_ = JSON.parse(JSON.stringify(check_agence))
        return check_agence_
    },
    update: async function (data,id_user){
        let msg='null'
        if(await this.check_agence_for_log(data) == ''){
            await Agence.update(
                { 
                    denomination :data.denomination,
                    numero_parcel:data.ref_parcelle,
                    commune      :data.commune,
                    telephone    :data.telephone,
                    avenue       :data.avenue,
                    quartier     :data.quartier
                }, 
                {
                where: { 
                    id : data.id 
                }
            });

            let donnees = {
                'id':data.id,
                'denomination' :data.denomination,
                'numero_parcel':data.ref_parcelle,
                'commune'      :data.commune,
                'telephone'    :data.telephone,
                'avenue'       :data.avenue,
                'quartier'     :data.quartier,
                'id_user'      :id_user,
                'action'       : 'Mise à jour agence',
                'date_'        : new Date().toISOString()
            },
            dat = fs.readFileSync('Logs/agence.json'),
            donnees_conversees = JSON.parse(dat)
            donnees_conversees.push(donnees)
            let nouveau =  JSON.stringify(donnees_conversees) 
            fs.writeFileSync('Logs/agence.json', nouveau , err=>{
                if(err) throw err
            })
            msg = 'r'
        }
        return msg
    },
    on_transaction: async (data)=>{
        let trans = await Transaction.findAll({
            where: { id : data.id }
        })
        return trans
    },
    update_transaction: async (data)=>{
        await Transaction.update(
            { 
                minimum:data.min,
                maximum:data.max,
                frais  :data.frais
            }, 
            {
            where: { 
                id : data.id 
            }
        });
    },
    rep_province:async ()=>{
        let prov = await Province.findAll()
        return prov
    },
    rep_type_piece:async (id)=>{
        const [type_piece, metadata_] = await sequelize.query("SELECT type_piece_identites.* FROM type_piece_identites ORDER BY type_piece_identites.libelle"); 
        const type_piece_ = JSON.parse(JSON.stringify(type_piece))
        return type_piece_
    },
    rep_type_membre:async()=>{
        const [type_membre, metadata_] = await sequelize.query("SELECT type_employes.* FROM type_employes WHERE type_employes.id<>1 AND type_employes.id<>2 AND type_employes.id<>11"); 
        const type_membre_ = JSON.parse(JSON.stringify(type_membre))
        return type_membre_
    },
    rep_type_membre_partenaire:async()=>{
        const [type_membre, metadata_] = await sequelize.query("SELECT type_membres.* FROM type_membres WHERE type_membres.id <> 7 "); 
        const type_membre_ = JSON.parse(JSON.stringify(type_membre))
        return type_membre_
    },
    rep_etat_civil:async function(){
        const [type_piece, metadata_] = await sequelize.query("SELECT etat_civils.* FROM etat_civils ORDER BY etat_civils.libelle"); 
        const type_piece_ = JSON.parse(JSON.stringify(type_piece))
        return type_piece_
    },
    get_user:async function(data){
        const [compte, meta] = await sequelize.query("SELECT users.id_type id_tp FROM users INNER JOIN compte_moneys ON compte_moneys.id_member=users.id WHERE compte_moneys.id=:id",
        {
            replacements: { id:data.donnee }
        }),
        compte_ = JSON.parse(JSON.stringify(compte))
        return compte_
    }
};

