import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingmModule } from '../app-routingm.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: 
  [
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports:
  [
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: 
  [
    CommonModule,
    SharedModule,
    AuthModule,
    AppRoutingmModule
  ]

})
export class PagesModule { }
