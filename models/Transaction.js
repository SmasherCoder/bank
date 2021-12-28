const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Accountdetails = require('./Accountdetails');

class Tranaction extends Model { }

Tranaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    acct_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Accountdetails,
        key: 'id'
      }
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