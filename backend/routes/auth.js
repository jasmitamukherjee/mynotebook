const express = require('express')

const User = require('../models/User')
const router = express.Router();
const {body,validationResult} = require('express-validator')
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')

const JWT_SEC ='Jasmitaisagood$girl'


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

   const salt=await bcrypt.genSalt(10)

   const secPass= await bcrypt.hash(req.body.password,salt)
   user = await User.create({
    name: req.body.name,
    password : secPass,
    email : req.body.email,
   })
   
   const data={
    user:{
        id:user.id
    }
   }
const authToken = jwt.sign(data,JWT_SEC);
// console.log(jwtData)
res.json({authToken})

// res.json(user)
} catch (error) {

    console.error(error.message);
    res.status(500).send("Some issue has occured.")
    
}

   

})


//user authentication
router.post('/login',[
    
    body('email','Enter a valid email address').isEmail(),
    body('password','Password cannot be blank').exists()
   
], async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.status(400).json({errors : errors.array()})
    }

    const {email,password} = req.body;
    try {
        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"Try logging in with correct credentials"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Try logging in with correct credentials"})
        }
        const data={
            user:{
                id:user.id
            }
           }
        const authToken = jwt.sign(data,JWT_SEC);
        res.send(authToken)
        
    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal Server Error: Some issue has occured.")
        
    }

})

module.exports= router;
