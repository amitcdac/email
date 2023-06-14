const express = require('express')
const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./src/routes/user')
require('./src/mail/transporter')

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mail',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log('connected')
}).catch((err)=>{console.log("connection err",err)})

app.use("/users",userRoutes)
// const mail =  async () =>{
//   let testAccount = await nodemailer.createTestAccount()
   

  // let config = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: 'cdndev@cdnsol.com', // generated ethereal user
  //     pass: 'Lg;iw[$}ExaD', // generated ethereal password
  //   },
  // })

  // const sendmailnow = await config.sendMail({
  //   from: 'cdndev@cdnsol.com', // sender address
  //   to: "", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<h1>Hello world?</h1>", // html body
  //  })
  //  console.log("Message sent: %s", sendmailnow.messageId);
  //  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(sendmailnow));
  // }

  // mail().catch((e)=>console.log(e));
  app.listen(3000,()=>console.log('app is running on Port 3000' ))


  
   