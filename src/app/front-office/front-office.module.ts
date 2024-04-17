import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { BodypageComponent } from './bodypage/bodypage.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PageHomeComponent,
    HeaderpageComponent,
    BodypageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
