const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
   
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "25c3138bdc2320",
          pass: "44eb0d8a45423e"
        }
  })
transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }else{
        console.log(('mail server is running .. . '))
    }
})
module.exports = transporter