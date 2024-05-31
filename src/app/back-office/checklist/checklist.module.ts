import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { ListChecklistComponent } from './list-checklist/list-checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { FormsModule } from '@angular/forms';
import { LigneCheckComponent } from './ligne-check/ligne-check.component';
import { AddLigneCheckComponent } from './add-ligne-check/add-ligne-check.component';
import { ChecklistDetailsComponent } from './checklist-details/checklist-details.component';
import { ListPosageComponent } from './list-posage/list-posage.component';
import { AddPosageComponent } from './add-posage/add-posage.component';
import { PosageDetailsComponent } from './posage-details/posage-details.component';
import { ListCecklistCompleteComponent } from './list-cecklist-complete/list-cecklist-complete.component';
import { AddChecklistCompleteComponent } from './add-checklist-complete/add-checklist-complete.component';
import { ListChecklistCompleteValidation1Component } from './list-checklist-complete-validation1/list-checklist-complete-validation1.component';
import { AddChecklistCompleteValidation2Component } from './add-checklist-complete-validation2/add-checklist-complete-validation2.component';
import { ChecklistRemplirDetailsComponent } from './checklist-remplir-details/checklist-remplir-details.component';





@NgModule({
  declarations: [
    ListChecklistComponent,
    AddChecklistComponent,
    LigneCheckComponent,
    AddLigneCheckComponent,
    ChecklistDetailsComponent,
    ListPosageComponent,
    AddPosageComponent,
    PosageDetailsComponent,
    ListCecklistCompleteComponent,
    AddChecklistCompleteComponent,
    ListChecklistCompleteValidation1Component,
    AddChecklistCompleteValidation2Component,
    ChecklistRemplirDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    ChecklistRoutingModule
  ]
})
export class ChecklistModule { }
