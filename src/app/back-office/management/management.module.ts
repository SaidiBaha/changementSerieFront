import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { FamilleComponent } from './famille/famille.component';
import { TesteurComponent } from './testeur/testeur.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';




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
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
