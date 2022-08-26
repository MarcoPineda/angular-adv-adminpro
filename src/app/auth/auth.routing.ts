import { Routes, RouterModule } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { PagesComponent } from "../pages/pages.component"; 
import { LoginComponent } from "./login/login.component"; 
import { RegisterComponent } from "./register/register.component";



const routes: Routes = 
[
       {  path: '',
         component: PagesComponent,
         children: 
         [
            {path:'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: '',redirectTo:'/dashboard',pathMatch: 'full'},
            
        ],
    }
]

@NgModule
({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class authRoutingModule{}