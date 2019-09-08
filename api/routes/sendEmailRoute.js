const express = require('express');
const router = express.Router();
const sendEmail= require('../models/sendEmail')
const nodemailer = require('nodemailer');


router.post('/sendEmail', async (req, res)=>{
     
     let texto= "este correo fue enviado desde " + req.body.destinatario + " seleccionando el idioma " + req.body.idioma +
     " con el asunto " + req.body.carta
     console.log(texto)  

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'estivetg@gmail.com',
          pass: 'Alejo65452589,'
        }
      });
      
      var mailOptions = {
        from: 'estivetg@gmail.com',
        to: 'estivetg@gmail.com',
        subject: 'correo de colfuturo',
        text: texto
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
        'status': "email enviado correctamente!"
   })
});

module.exports = router;