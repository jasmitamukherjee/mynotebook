const jwt=require('jsonwebtoken')

const JWT_SEC ='Jasmitaisagood$girl'

const fetchuser= (req,res,next)=>{

    //get user from token
    const token= req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"})

    }
    try {
        const string = jwt.verify(token,JWT_SEC);
    req.user = data.user;

    next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token"})
        
    }
    

}
module.exports= fetchuser;