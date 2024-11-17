'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_opt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction_opt.init({
    otp                :DataTypes.STRING,
    validite           :DataTypes.STRING,
    statut             :DataTypes.INTEGER,
    transaction_type   :DataTypes.STRING,
    transaction_type_id:DataTypes.INTEGER,
    user_id            :DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction_opt',
  });
  return transaction_opt;
};