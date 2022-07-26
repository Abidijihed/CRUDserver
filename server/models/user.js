const {connection}=require("../dtabase/config")
module.exports={
    getOneuser:((req,res)=>{
        const query="select * from mylist"
        //connect the server to the table mylist in the data base and 
        //select from the table mylist all the information 
        connection.query(query,(err,result)=>{
            err?res.status(500).send(err):res.status(200).send(result)
        })

    }),
    createpost:((req,res)=>{
     const query=`insert into mylist (FirstName,LastName,age) VALUES ("${req.body.FirstName}","${req.body.LastName}","${req.body.age}")`
      connection.query(query,((err,result)=>{
        err?res.status(500).send(err):res.status(201).send("user created")
      }))
    }),
    updateuser:((req,res)=>{
       console.log(req.params.id)
         const query=`UPDATE mylist SET FirstName="${req.body.FirstName}" , LastName="${req.body.LastName}",age="${req.body.age}" WHERE id="${req.params.id}"`
         connection.query(query,(err,data)=>{
           err?res.status(500).send(err):res.status(201).send("update")
         console.log(err)
         })
 
      }),
      deleteuser:((req,res)=>{

          const query=`delete from mylist WHERE id="${req.params.id}" ` 
          connection.query(query,(err,results)=>{
            err?res.status(500).send(err):res.status(200).send("deleted")
          })
          
        })
    

    
}