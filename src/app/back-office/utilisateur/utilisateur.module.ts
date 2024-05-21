import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserProfileComponent,
    ChangePasswordComponent,
    ModifierProfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilisateurRoutingModule,
    MatIconModule,
  ]
})
export class UtilisateurModule { }
