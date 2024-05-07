const { sequelize } = require('./config/connection');
const Employee = require('./models/employee');
const Department = require('./models/department');
const Role = require('./models/role');

Employee.init(sequelize);
Department.init(sequelize);
Role.init(sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Sequelize models synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing Sequelize models:', error);
  });


Employee.bulkCreate([
    { name: 'Susan Tree', role_id: '3',},
    { name: 'Petra Green', role_id: '4',},
    { name: 'Rachel MacToast', role_id: '4',},
    { name: 'Dil Bert', role_id: '4',},
    { name: 'Lan Gentry', role_id: '4',},
    { name: 'Penelope Lou', role_id: '8',},
    { name: 'Jake "Snakey" Jake', role_id: '9',},
    { name: 'Melvin Brown', role_id: '10',},
    { name: 'Joe Schmoe', role_id: '11',},
    { name: 'Moe Schmoe', role_id: '11',},
    { name: 'Beaumont Schmoe', role_id: '11',},
    { name: 'Godor Macoat', role_id: '12',},
    { name: 'Steve?', role_id: '13',}
])

Department.bulkCreate([
    { name: "sales" },
    { name: "research" },
    { name: "management" },
    { name: "tech" }
])

Role.bulkCreate([
    { title: 'telemarketer', salary: 45000, department_id: 1,},
    { title: 'telemarketer tier 2', salary: 60000, department_id: 1,},
    { title: 'telemarketer tier 3', salary: 80000, department_id: 1,},
    { title: 'sales intern', salary: 0, department_id: 1,},
    { title: 'test subject', salary: 10000, department_id: 2,},
    { title: 'data analyst', salary: 60000, department_id: 2,},
    { title: 'test supervisor', salary: 80000, department_id: 3,},
    { title: 'sales manager', salary: 100000, department_id: 3,},
    { title: 'hiring manager', salary: 100000, department_id: 3,},
    { title: 'payroll manager', salary: 900000, department_id: 3,},
    { title: 'tech intern', salary: 0, department_id: 4,},
    { title: 'tech support', salary: 15000, department_id: 4,},
    { title: 'uncertain tech role but we are too scared to fire him', salary: 50000, department_id: 4,}

])

    .then(() => {
      res.send('Databases have been seeded!');
    })
    .catch((err) => {
      res.json(err);
    });