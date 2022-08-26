import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const routes: Routes = 
[
  //path:'/dashboard' PagesPouting
  //path:'/auth' AuthRouthing
  { path: '', redirectTo: '/dashboard',pathMatch:'full'},
  {path: '**',component: NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: 
  [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    authRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingmModule { }
