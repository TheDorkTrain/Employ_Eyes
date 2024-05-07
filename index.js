const colors = require('colors');
const inquirer = require('inquirer');


console.log(`${colors.cyan("Welcome to Employ_Eyes, please select your purpose for todays visit. ")}`)

  inquirer
  .prompt({
    type: "list",
    message: `${colors.magenta("What would you like to do?")}`,
    name: "choice",
    choices: [`View All Departments`, `View All Roles`, `View All Employees`, `Add a Department`, `Add a Role`, `Add an Employee`, `Update an Employee\'s role`],
  })
  .then(({ action }) => {
    switch (action) {
        case `View All Departments`:
            break;
        case `View All Roles`:
            break;
        case `View All Employees`:
            break;
        case `Add a Department`:
            break;
        case `Add a Role`:
            break;
        case `Add an Employee`:
            break;
        case `Update an Employee\'s role`:
            break;
    }
  })
  .catch((error) => {
      console.error(error);
  });