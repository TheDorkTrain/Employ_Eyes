const sequelize = require('../config/connection');
const Employee = require('../models/employee');
const Department = require('../models/department');
const Role = require('../models/role');

const employeeSeed = require('./employeeSeed.json');
const roleSeed = require('./roleSeed.json');
const departmentSeed = require('./departmentSeed.json');


const seedDatabase = async () => {
  try{
    await sequelize.sync({ 
      force: true 
    })
  
    await Department.bulkCreate(departmentSeed);
    await Role.bulkCreate(roleSeed);
    await Employee.bulkCreate(employeeSeed);
  
    console.log('All Seeds Planted'); 
    process.exit(0); 
  }
  catch(err){ console.log(err)}
  
  };
  
  seedDatabase();