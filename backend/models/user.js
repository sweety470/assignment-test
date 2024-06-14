'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name:{
      type:DataTypes.STRING
    },
    interest:{
      type:DataTypes.STRING
    },
    age:{
      type:DataTypes.INTEGER
    },
    mobile:{
      type:DataTypes.BIGINT
    },
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName:'users',
    timestamps: true
  });
  return user;
};