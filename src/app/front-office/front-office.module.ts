import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { HomepageFrontComponent } from './homepage-front/homepage-front.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { BodyFrontComponent } from './body-front/body-front.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
   
    HomepageFrontComponent,
    HeaderFrontComponent,
    BodyFrontComponent,
    FooterFrontComponent,
    ForgotPasswordComponent,
  
  
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontOfficeRoutingModule
  ],

})
export class FrontOfficeModule { }
