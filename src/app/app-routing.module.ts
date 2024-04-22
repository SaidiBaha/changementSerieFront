import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './back-office/profil/user-profile/user-profile.component';
import { ChangePasswordComponent } from './back-office/profil/change-password/change-password.component';
import { VerifyOtpComponent } from './front-office/verify-otp/verify-otp.component';
import { ChangeForgotPasswordComponent } from './front-office/change-forgot-password/change-forgot-password.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
  },
  {
    path:'profile',component:UserProfileComponent
  },
  {
    path:'changePassword',component:ChangePasswordComponent
  },
  {
    path:'verifyOtp',component:VerifyOtpComponent
  }
  ,
  {
    path:'changePassForgot',component:ChangeForgotPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
