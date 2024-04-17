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
    AddChecklistCompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    ChecklistRoutingModule
  ]
})
export class ChecklistModule { }
