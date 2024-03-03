const express = require('express')
const router = express.Router();
const {body,validationResult} = require('express-validator')

const fetchuser = require('../middleware/fetchUser');
const Notes = require('../models/Notes')
router.get('/fetchallnotes',fetchuser,async (req,res)=>{

    try {
        const notes= await Notes.find({user : req.user.id})
   res.json(notes)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error: Some issue has occured.")
        
    }

    
    // res.json([])

})

//add new note

router.post('/addnote',fetchuser,[
    
    // body('Title','Enter a valid title').isLength({min : 3}),
    
    body('description','Description must be atleast 5 characters ').isLength({min : 5})

],async (req,res)=>{
    try {
        
   
    const {title,description,tag}= req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.status(400).json({errors : errors.array()})
    }

    const note = new Notes({
        title,description,tag,user : req.user.id

    })
   const saveNote= await  note.save();

    
   res.json(saveNote)
} catch (error) {
    console.error(error.message);
        res.status(500).send("Internal Server Error: Some issue has occured.")
        
}
    // res.json([])

})

module.exports= router;
