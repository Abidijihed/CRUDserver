const mysql = require("mysql2")

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ji31826832",
    database:"jihedtodo"

})
connection.connect((err)=>{
    err?console.log(err):console.log('data base connected')
})
module.exports={connection}