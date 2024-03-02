const express = require('express')

const User = require('../models/User')
const router = express.Router();


//user using : POST "/api/auth"

router.post('/',(req,res)=>{

    console.log(req.body);
    const user= User(req.body)
    user.save()
    res.send(req.body)
    // res.json(obj)

})

module.exports= router;
