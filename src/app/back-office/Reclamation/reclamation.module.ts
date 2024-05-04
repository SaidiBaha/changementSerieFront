import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReclamationRoutingModule } from '../Reclamation/reclamation-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    ListReclamationComponent,
  
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    
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
export class ReclamationModule { }