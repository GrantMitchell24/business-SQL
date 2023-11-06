const connection = require("./connections.js")
const inquirer = require("inquirer")

function start(){
  inquirer.createPromptModule([
    {
      type: "list",
      message: "Select action to take",
      name: "mainPrompt",
      choices: ["Show All Departments", "Show All Roles", "Show All Employees"]
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

start()