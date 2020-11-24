const users= {};
const fs= require('fs')

users.agregar = (req,res)=>{
    var email= req.body.email;
    var pass= req.body.pass;
    let array=[]
    let json={'email':email,'password':pass};
    array.push(json)
    fs.writeFile('users.json',(array),(error)=>{
        if(error){
            console.log(error.message)
        }
        res.send('usuario Guardado')
    })

}

module.exports = users;