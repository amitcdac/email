const User = require("../models/User");
const sendUserCreationEmail = require('../mail/sendAccountCreation')


exports.create = async (req,res)=>{
    try{
        const {name,email,from} = req.body;
        const emailCheck = await User.findOne({email:req.body.email})
        console.log(emailCheck)
       // console.log(emailCheck.email)
        if(emailCheck){
            return res.json({message:"email is already exists"})
        }
        const user = await User.create({
            name,
            email,
            from
        });
        //send confirmation
        sendUserCreationEmail({
            name,email,from
        })
        res.json(user)
    }catch(error){
        console.log(error);
        res.status(400).json(error)
    }
}