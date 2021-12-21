const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accountdetails extends Model {}

Accountdetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      account_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      balance: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Accountdetails'
    }
  );
  
  module.exports = Accountdetails;