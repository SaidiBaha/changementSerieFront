import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';

const routes: Routes = [

  {
    path: 'userProfile',
    component: UserProfileComponent,
  },
  {
    path:'changepsw',
    component:ChangePasswordComponent
  },
  {
    path:'modifierProfil',
    component:ModifierProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
