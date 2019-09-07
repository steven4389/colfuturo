const express = require('express');
const router = express.Router();
const sendEmail= require('../models/sendEmail')
const nodemailer = require('nodemailer');


router.post('/sendEmail', async (req, res)=>{

    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'usuer@gmail.com',
          pass: '*******,'
        }
      });
      
      var mailOptions = {
        from: 'estivetg@gmail.com',
        to: 'estivetg@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    console.log(req.body)
   const SendEmail = new sendEmail(req.body);
   await SendEmail.save();
   res.json({
        'status': "email send"
   })
});

module.exports = router;