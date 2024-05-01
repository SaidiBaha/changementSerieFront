import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    UserProfileComponent

  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatMenuModule,
        MatExpansionModule,
        FlexLayoutModule,
        MatButtonModule,FormsModule
  ]
})
export class ProfilModule { }
