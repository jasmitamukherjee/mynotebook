const express = require('express')

const User = require('../models/User')
const router = express.Router();
const {body,validationResult} = require('express-validator')


//user using : POST "/api/auth"

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min : 3}),
    body('email','Enter a valid email address').isEmail(),
    body('password','Password must be atleast 5 characters ').isLength({min : 5})
], async (req,res)=>{

   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
   }

   try {
    
  
   let user = await User.findOne({email : req.body.email})
   
   if(user){

    return res.status(400).json({error : "Sorry a user with the same emial already exists"})
   }
   user = await User.create({
    name: req.body.name,
    password : req.body.password,
    email : req.body.email,
   })
   
   


res.json(user)
} catch (error) {

    console.error(error.message);
    res.status(500).send("Some issue has occured.")
    
}

   

})

module.exports= router;
