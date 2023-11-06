const mysql = require("mysql12")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "GaryIsCool",
  port: 3306,
  database:"work_db"
});

connection.connect(function(){
  console.log("db connected")
});

module.exports = connection;