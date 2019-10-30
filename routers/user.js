const express = require('express')
const router = new express.Router()
router.get('/',(req,res,next)=>{
    res.render('index.ejs');
})
const user = {
    name:"jeevan",
    class:"web-apps"
}
router.get('/jeevan',(req,res,next)=>{
    res.send({user})
})
router.get('/jeevan/id',(req,res,next)=>{
    let id = 'Section' ;
    user[id] = "563"
    res.send({user})
})
router.use('/user',require('../controllers/user.js'));

module.exports = router 