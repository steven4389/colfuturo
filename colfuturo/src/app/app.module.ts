import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { CartasPatrocinioComponent } from './components/cartas-patrocinio/cartas-patrocinio.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    CartasPatrocinioComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
