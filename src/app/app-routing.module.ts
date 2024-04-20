import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './back-office/profil/user-profile/user-profile.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
