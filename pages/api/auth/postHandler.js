const jwt = require("jsonwebtoken");

export default async function postHandler(req,res){
    const {userName,email,password} = req.body;

    if(!userName || !email || !password){
        return res.status(401).json({msg:"please provide the required details"});
    }
    
    res.status(200).send({userName,email});
}