const path = require('path')
const ejs = require('ejs')
const transporter = require("../mail/transporter")


const sendUserCreationEmail = async({name,email,from})=>{
   const template = path.join(__dirname,"../../src/view/AccountCreated.ejs")

   const data = await ejs.renderFile(template,{name})

   const mailOptions={
     from:from,
     to:email,
     subject:"Account Activated",
     html:data
   }
   transporter.sendMail(mailOptions)
}
module.exports = sendUserCreationEmail