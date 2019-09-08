import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelComponent} from './components/panel/panel.component';
import {CartasPatrocinioComponent} from './components/cartas-patrocinio/cartas-patrocinio.component'

const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent,
    children:[
      { path: 'patrocinio', component: CartasPatrocinioComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
