const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./department');

class Role extends Model {}

Role.init(

      {
        role_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING
        },
        salary: {
          type: DataTypes.INTEGER
        },
        department_id: {
          type: DataTypes.INTEGER
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Role'
      }
    );

Role.belongsTo(Department, { foreignKey: 'id' });

module.exports = Role;