import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomepageFrontComponent } from './homepage-front/homepage-front.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { BodyFrontComponent } from './body-front/body-front.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'pagehome',
    component:HomepageFrontComponent,
    
  },
  {
    path:'header',
    component:HeaderFrontComponent
  },
  {
    path:'body',
    component:BodyFrontComponent
  },
  
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
