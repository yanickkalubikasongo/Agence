'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transfert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transfert.init({
    confirmation     : DataTypes.INTEGER,
    fk_expediteur    : DataTypes.INTEGER,
    fk_recipiendaire : DataTypes.INTEGER,
    montant_envoye   : DataTypes.DECIMAL,
    pourc_preleve    : DataTypes.DECIMAL,
    point_cash_id    : DataTypes.INTEGER,
    ref_operation    : DataTypes.STRING,
    id_user          : DataTypes.INTEGER,
    devise           : DataTypes.STRING,
    annule           : DataTypes.INTEGER,
    id_config_general: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transfert',
  });
  return transfert;
};