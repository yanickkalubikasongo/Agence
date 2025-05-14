const {sequelize,Op,Connexion,Employe} = require('../config/db');
const fs     = require('fs')
const bcrypt = require("bcrypt");

module.exports={
    recuperation_id_mdp_oublie : async function(pseudo){
        const [rec_id, metadata] = await sequelize.query("SELECT employes.* FROM employes WHERE employes.pseudo = :ps",
        {
            replacements: { ps: pseudo }
        });
        const rec_id_ = JSON.parse(JSON.stringify(rec_id))
        return rec_id_
    },
    create_new_mdp_ : async function(BodyRequest){
        await sequelize.transaction(async (t) => {
            let id = await this.recuperation_id_mdp_oublie(BodyRequest.pseudo),
                salt     = await bcrypt.genSalt(10),
                mdp_hash = await bcrypt.hash(BodyRequest.new_mdp,salt)

            await Employe.update({ mot_de_passe : mdp_hash,etat_mot_de_passe : 1 }, {
                where: { pseudo : BodyRequest.pseudo }
            },{ transaction: t });
            
               donnees = {
                    'id' : id[0].id,
                    'nouveau_mot_de_passe': BodyRequest.new_mdp,
                    'action': 'Récupération mot de passe',
                    'date_': new Date().toISOString()
                },
                data = fs.readFileSync('Logs/compte.json'),
                donnees_conversees = JSON.parse(data)
            donnees_conversees.push(donnees)
            let nouveau =  JSON.stringify(donnees_conversees) 
            fs.writeFileSync('Logs/compte.json', nouveau , err=>{
                if(err) throw err
            })
        });
    },
    check_pseudo_and_mdp : async function(pseudo_,mdp_ancien){
        const [mdp, met] = await sequelize.query("SELECT comptes.* FROM comptes WHERE comptes.motpasse = :mdp AND comptes.pseudo = :ps ",
        {
            replacements: { mdp :  mdp_ancien, ps : pseudo_}
        });
        const mdp_ = JSON.parse(JSON.stringify(mdp))
        return mdp_
    },
    check_mdp : async function(mdp){
        let employer = await Employe.findAll(),
            mdp_exist = 0

        for (let i = 0; i < employer.length; i++) {       
            if(await bcrypt.compare(mdp,employer[i].mot_de_passe) == true){
                mdp_exist = 1
            }
        } 
        return mdp_exist
    },
    check_pseudo_mdp_admin_plat : async function(pseudo_){
        const [cmtt, metadata_] = await sequelize.query("SELECT agences.id id_o,employes.etat_user eta_us, employes.id_type_employe typee, users.id id,employes.mot_de_passe mdp,employes.etat_mot_de_passe etat_mdp FROM agences INNER JOIN employes ON employes.id_agence=agences.id INNER JOIN users ON users.id=employes.id_user INNER JOIN type_employes ON type_employes.id=employes.id_type_employe WHERE employes.pseudo LIKE BINARY :ps AND (employes.id_type_employe=2 OR employes.id_type_employe=3 OR employes.id_type_employe=4 OR employes.id_type_employe=5)",
            {
                replacements: { ps: pseudo_ }
            }
        ); 
        const obj = JSON.parse(JSON.stringify(cmtt))
        return obj
    },
    connexion_administrateur : async function(pseudo){
        const [cmt, metadata_] = await sequelize.query("SELECT agences.id id_o,UPPER(agences.denomination) d, employes.id_type_employe typee, users.id id,users.photo p,users.prenom,users.nom,users.post_nom,users.sexe,users.email,users.telephone,users.adresse_physique, employes.mot_de_passe mdp FROM agences INNER JOIN employes ON employes.id_agence=agences.id INNER JOIN type_employes ON type_employes.id=employes.id_type_employe INNER JOIN users ON users.id = employes.id_user WHERE employes.pseudo LIKE BINARY :ps",
        {
            replacements: { ps: pseudo }
        }); 
        const compte_ = JSON.parse(JSON.stringify(cmt))
        return compte_
    },
    create_connexion : async function(id_cmt){
        await Connexion.create({
            id_user : id_cmt
        }) 
    },
    deconnexion_simple_user : async function(id_compte){   
        const [conn, met] = await sequelize.query("SELECT connexions.id id FROM connexions WHERE connexions.id_user = :idcmt ORDER BY connexions.id DESC LIMIT 1",
        {
            replacements: { idcmt : id_compte }
        });
        const connexion_ = JSON.parse(JSON.stringify(conn))
        await Connexion.update({  date_heure_decon : new Date().toISOString().replace('Z', '').replace('T', ' ') }, {
            where: { id : connexion_[0].id }
        });
    }
};