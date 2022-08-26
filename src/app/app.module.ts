import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingmModule } from './app-routingm.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';




@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: 
  [
    AuthModule,
    PagesModule,
    BrowserModule,
    AppRoutingmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
