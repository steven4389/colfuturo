const express = require('express');
const router = express.Router();
const sendEmail= require('../models/sendEmail')
const nodemailer = require('nodemailer');
const pdf = require('html-pdf');

var options = {
  "format": 'A4',
  "header": {
      "height": "60px"
  },
  "footer": {
      "height": "22mm"
  },
  "base": 'file://Users/midesweb/carpeta_base/'
 };


router.post('/sendEmail', async (req, res)=>{
     
    
      var contenido = `
      <h1>Destinatario: ${req.body.destinatario}</h1> 
      <p>Idioma ${req.body.idioma}</p>
      <p>${req.body.carta}</p>
      `;

      await pdf.create(contenido, options).toFile('./salida.pdf', function(err, res) {
          if (err){
              console.log(err);
          } else {
              console.log(res);
          }
      });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'estivetg@gmail.com',
          pass: 'Alejo65452589,'
        }
      });
      
      var mailOptions = {
        from: 'estivetg@gmail.com',
        to: req.body.destinatario,
        subject: 'correo de colfuturo',
        text: "Archivo PDF",
        attachments:[
          {
            path: '../api/salida.pdf' //stream this file
          }
        ]
      
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