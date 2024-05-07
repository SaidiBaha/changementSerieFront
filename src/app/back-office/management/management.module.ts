import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { FamilleComponent } from './famille/famille.component';
import { TesteurComponent } from './testeur/testeur.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FamilleComponent,
    TesteurComponent,
   
    ProduitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManagementRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatButtonModule,FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatSelectModule,
    MatIconModule,
  ]
})
export class ManagementModule { }
