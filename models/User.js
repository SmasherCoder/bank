const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },   
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
          }
      },   
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'User'
    }
  );
  
  module.exports = User;