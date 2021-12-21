const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tranaction extends Model {}

Tranaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.date,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      acct_id: {
        type: DataTypes.NUMBER,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Transaction'
    }
  );
  
  module.exports = Tranaction;