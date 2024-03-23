import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { ListChecklistComponent } from './list-checklist/list-checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListChecklistComponent,
    AddChecklistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  
    ChecklistRoutingModule
  ]
})
export class ChecklistModule { }
