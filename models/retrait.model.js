'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class retrait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  retrait.init({
    confirmation     : DataTypes.INTEGER,
    montant_retire   : DataTypes.DECIMAL,
    pourc_preleve    : DataTypes.DECIMAL,
    id_compte        : DataTypes.INTEGER,
    point_cash_id    : DataTypes.INTEGER,
    ref_operation    : DataTypes.STRING,
    id_user          : DataTypes.INTEGER,
    devise           : DataTypes.STRING,
    annule           : DataTypes.INTEGER,
    id_config_general: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'retrait',
  });
  return retrait;
};