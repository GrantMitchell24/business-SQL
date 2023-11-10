const connection = require("./connections.js")
const inquirer = require("inquirer")

function start(){
  inquirer.prompt([
    {
      type: "list",
      message: "Select action to take",
      name: "mainPrompt",
      choices: ["Show All Departments", "Show All Roles", "Show All Employees", "Add Department,", "Add Role", "Add emmployee"]
    },
  ]).then(answer =>{
    if(answer.mainPrompt === "Show All Departments"){
      showDepartments()
    }
    else if(answer.mainPrompt === "Show All Roles"){
      showRoles()
    }
    else if(answer.mainPrompt === "Show All Employees"){
      showEmployees()
    }else if(answer.mainPrompt === "Add Department"){
      AddDepartment()
    }else if(answer.mainPrompt === "Add Role"){
      AddRole()
    }else if(answer.mainPrompt === "Add Employee"){
      AddEmployee()
    }
  })
}

function showDepartments(){
  connection.query("SELECT * FROM department", (err, res)=>{
    if (err) throw err
    console.table(res)
    start()
  })
}
function showRoles(){
  connection.query("SELECT * FROM role", (err, res)=>{
    if (err) throw err
    console.table(res)
    start()
  })
}
function showEmployees(){
  connection.query("SELECT * FROM employee", (err, res)=>{
    if (err) throw err
    console.table(res)
    start()
  })
} 

function AddDepartment(){
  inquirer.prompt([
    {type: "input",
    name: "Add Department",
    message: "Please enter the new department you'd like to add!"
  }
  ])
  .then(answer =>{
    connection.query("insert into department set",
    {
      name: answer.Add_Department
    })
    start()
  })
}

function AddRole(){
  inquirer.prompt([
    {
    type: "input",
    name: "Add Title",
    message: "What is the name of the new role? "
  },
  {
    type:"input",
    mame: "Add_Salary",
    message: "What is the salary for the new role?"
  },
  {
    type: "list",
    name: "Add_Department_id",
    message: "What is the department_id for this role?",
    choices: [1,2]
  },
])
.then(answer => {
  connection.query("insert into role set? ",
  {
    title: answer.Add_Title,
    salary: answer.Add_Salary,
    department_id: answer.Add_Department_id
  }, function(err){
    if (err) throw err
    start()
  })
})
}

function AddEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name for the employee?"
    },
    {
      type: "list",
      name: "Role_Id",
      message: "What is the role_id for this employee?",
      choices:[1,2,3,4]
    },
    {
    type: "list",
    name: "manager_Id",
    message: "What is the manager id for this employee?",
    choices:[1,2,3,4]
},
  ])
  .then(answer =>{
    connection.query("insert into employee set?",
    {
      first_name: answer.first_name,
      last_name: answer.last_name,
      role_id: answer.role_id,
      manager_id: answer.manager_id
    })
    start()
  })

}