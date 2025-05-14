const {sequelize,Op} = require('../config/db');
const fs = require('fs')

module.exports={
    find_user : async (Part,agence)=>{
        let user = ''
        const [part, metad] = await sequelize.query("SELECT users.*,etat_civils.libelle lb,type_membres.type_membre libelle FROM users INNER JOIN membres ON membres.id_user=users.id INNER JOIN type_membres ON type_membres.id=membres.id_type_membre INNER JOIN partenaire_membres ON partenaire_membres.id_membre=membres.id INNER JOIN partenaires ON partenaires.id=partenaire_membres.id_partenaire INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE users.numero_piece=:num_piece AND users.id_type_piece_ident=:id_type",
        {
            replacements: { num_piece :Part.num_piece, id_type:Part.type_piece} 
        })
        user = JSON.parse(JSON.stringify(part))

        if(user == ''){
            const [employe, metada] = await sequelize.query("SELECT users.*,etat_civils.libelle lb,type_employes.libelle FROM users INNER JOIN employes ON employes.id_user=users.id INNER JOIN type_employes ON type_employes.id=users.id_type_piece_ident INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE users.numero_piece=:num_piece AND users.id_type_piece_ident=:id_type AND employes.id_agence=:id_agence",
            {
                replacements: { num_piece :Part.num_piece, id_type:Part.type_piece,id_agence: agence} 
            })
            user = JSON.parse(JSON.stringify(employe))
        }
        return user
    },
    find_temoin : async (Part)=>{
        const [part, metada] = await sequelize.query("SELECT users.*,temoins.id id_tem,provinces.libelle lb,provinces.id id_prov,etat_civils.id id_etat,etat_civils.libelle etat_civil FROM temoins INNER JOIN users ON users.id=temoins.id_user INNER JOIN provinces ON provinces.id=users.id_province INNER JOIN etat_civils ON etat_civils.id=users.id_etat_civil WHERE users.numero_piece=:num_piece AND users.id_type_piece_ident=:type_piece",
        {
            replacements: { num_piece :Part.num_piece, type_piece:Part.type_piece} 
        }),
        partenaire = JSON.parse(JSON.stringify(part))
        return partenaire
    },
    find_gerant : async (Part)=>{
        let partenaire
        if(Part.rep == true) {
            const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire")
            partenaire = JSON.parse(JSON.stringify(part))
        }else{
            const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire WHERE partenaires.id=:id",
            {
                replacements: { id :  Part.id}
            });
            partenaire = JSON.parse(JSON.stringify(part))
        }
        return partenaire
    },
    rep_part : async ()=>{
        const [part, metada] = await sequelize.query("SELECT partenaires.id,partenaires.prenom,partenaires.nom,partenaires.postnom,partenaires.sexe,partenaires.telephone,organisations.denomination FROM partenaires INNER JOIN organisations ON partenaires.id=organisations.id_partenaire"),
              partenaire = JSON.parse(JSON.stringify(part))
        return partenaire
    }
};