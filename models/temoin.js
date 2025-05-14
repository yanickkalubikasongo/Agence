'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  temoin.init({
    prenom          : DataTypes.STRING,
    postnom         : DataTypes.STRING,
    nom             : DataTypes.STRING,
    sexe            : DataTypes.STRING,
    telephone       : DataTypes.STRING,
    adresse_physique: DataTypes.STRING,
    lieu_naissance  : DataTypes.STRING,
    date_naissance  : DataTypes.STRING,
    numero_piece    : DataTypes.STRING,
    id_province     : DataTypes.INTEGER,
    type_piece      : DataTypes.INTEGER,
    etat_civil      : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'temoin',
  });
  return temoin;
};