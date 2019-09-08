import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  showFiller = false;
  deviceInfo = null;
  isMobile=false
  navbarOpen = false;
  public nombre:string= ""
  public cedula:string= ""
  public institucion:string= ""
  public titulo:string= ""

  constructor(private deviceService: DeviceDetectorService,
              private _router:Router, private _activatedRoute: ActivatedRoute,
              private _UserService:UserService) { this.epicFunction()}

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

  ngOnInit() {
    this.getUser()
  }

  patrocinio(){
    this._router.navigate(['./patrocinio'], { relativeTo: this._activatedRoute });
  }

  getUser(){
    this._UserService.getUser().subscribe(res=>{
      console.log(res)
      this.nombre=res[0].username
      this.titulo=res[0].titulo
      this.cedula=res[0].identification
      this.institucion=res[0].institution
    })
  }

}
