const {User,etat_civil,sequelize} = require('../config/db');

module.exports={
    rep_etat:async function(){
        return await etat_civil.findAll();
    },
    update:async function(data){
        await User.update(
            { 
                prenom:data.prenom,
                nom:data.nom,
                post_nom:data.postnom,
                date_naissance:data.date_naissance,
                lieu_naissance:data.lieu_naissance,
                email:data.email,
                telephone:data.telephone,
                adresse_physique:data.adresse_physique,
                numero_piece:data.numero_piece
            }, 
            {
            where: { 
                id : data.id 
            }
        });
    }
};
