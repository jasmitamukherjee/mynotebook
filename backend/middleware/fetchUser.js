const jwt=require('jsonwebtoken')

const JWT_SEC ='Jasmitaisagood$girl'

const fetchuser= (req,res,next)=>{

    //get user from token
    const token= req.header('auth-token');
    // res.send({token})
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"})

    }
    try {
        const data = jwt.verify(token,JWT_SEC);
        // console.log(string)
        req.user = data.user;
        // console.log(req.user)
        // const data = jwt.verify(token,JWT_SEC);
        // // console.log(string)
        // req.user = data.id;
        // // console.log(req.user)

    next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token"})
        
    }
    

}
module.exports= fetchuser;