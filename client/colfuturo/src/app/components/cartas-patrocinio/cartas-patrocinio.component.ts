import { Component, OnInit } from '@angular/core';
import {SendEmailService} from '../../services/send-email.service'
import {sendEmail} from '../../models/sendEmail'

@Component({
  selector: 'app-cartas-patrocinio',
  templateUrl: './cartas-patrocinio.component.html',
  styleUrls: ['./cartas-patrocinio.component.css']
})
export class CartasPatrocinioComponent implements OnInit {

  public email:sendEmail={ destinatario:"", idioma:"", carta:""};

  constructor(private SendEmailService:SendEmailService) { }

  ngOnInit() {
  }

  onSubmit(form){
    alert("correo enviado correctamente!")
    this.SendEmailService.saveRegistro(this.email).subscribe()
  }

  carta(param){
    this.email.carta=param
  }

}
