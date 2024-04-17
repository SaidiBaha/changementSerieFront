import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { BodypageComponent } from './bodypage/bodypage.component';

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
    path: 'pagehome',
    component: PageHomeComponent,
  },
  {
    path: 'headerpage',
    component: HeaderpageComponent,
  }
  ,
  {
    path: 'bodypage',
    component: BodypageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
