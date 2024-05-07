const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./role');

class Employee extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING
        },
        role_id: {
          type: DataTypes.INTEGER
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employees'
      }
    );
  }
}

Employee.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = Employee;
