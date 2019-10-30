const express = require('express')
const app = express.Router()
let user = [{
    id:"1",
    name:"Jeevan",
    age:"22"


},{
    id:"2",
    name:"kamal",
    age:"22"

}
]
app.get('/findall',(req,res)=>{
    res.send(user);
})
app.get('/findone/:id',(req,res)=>{
    const id = req.params.id
    for(let i =0 ;i<user.length;i++){
        if(id===user[i].id){
            res.send(user[i])
        }
        
    }
    res.send("Id not found")
    
})
app.get('/create',(req,res)=>{
    creatingUser()
    res.send(user)
})
creatingUser = ()=>{
    user.push({
        id:'3',
        name:'Al ali'
    })
}
app.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    for(let i =0 ;i<user.length;i++){
        if(id===user[i].id){
           user.splice(i,1)
           res.send(user)
        }
            
    }
    res.send("Id not found")
})


module.exports = app