import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChecklistComponent } from './list-checklist/list-checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { LigneCheckComponent } from './ligne-check/ligne-check.component';
import { AddLigneCheckComponent } from './add-ligne-check/add-ligne-check.component';
import { ChecklistDetailsComponent } from './checklist-details/checklist-details.component';
import { ListPosageComponent } from './list-posage/list-posage.component';
import { AddPosageComponent } from './add-posage/add-posage.component';
import { ListCecklistCompleteComponent } from './list-cecklist-complete/list-cecklist-complete.component';
import { AddChecklistCompleteComponent } from './add-checklist-complete/add-checklist-complete.component';
import { ListChecklistCompleteValidation1Component } from './list-checklist-complete-validation1/list-checklist-complete-validation1.component';
import { AddChecklistCompleteValidation2Component } from './add-checklist-complete-validation2/add-checklist-complete-validation2.component';
import { ChecklistRemplirDetailsComponent } from './checklist-remplir-details/checklist-remplir-details.component';

const routes: Routes = [
  {
    path: 'listcheck',
    component: ListChecklistComponent,
  },
  {
    path: 'addCheck',
    component: AddChecklistComponent,
  },
  {
    path: 'addCheck/:id',
    component: AddChecklistComponent,
  },
  {
    path: 'ligneCheck/:checklistId',
    component: LigneCheckComponent,
  },
  {
    path: 'ligneCheck/:checklistId/add',
    component: AddLigneCheckComponent,
  },
  {
    path: 'ligneCheck/:checklistId/edit/:id',
    component: AddLigneCheckComponent,
  },
  {
    path: 'checklistDetails/:id',
    component: ChecklistDetailsComponent,
  },
  {
    path: 'listPosage',
    component: ListPosageComponent,
  },
  {
    path: 'list/:ligneChecklistId',
    component: ListPosageComponent,
  },
  {
    path: 'addPosage',
    component: AddPosageComponent,
  },
  {
    path: 'listcheckComplete',
    component: ListCecklistCompleteComponent,
  },

  {
    path: 'remlirCheck/:checklistId',
    component: AddChecklistCompleteComponent,
  },
  {
    path: 'listcheckVal1/:id',
    component: ListChecklistCompleteValidation1Component,
  },
  {
    path: 'addChecklistVal2/:checklistCompleteeId/:checklistId',
    component: AddChecklistCompleteValidation2Component,
  },
  {
    path: 'checklistRemplirDetails',
    component: ChecklistRemplirDetailsComponent,
  },

  

 /* {
    path: 'ligneCheck/:ligneChecklistId/posages',
    component: ListPosageComponent,
  },*/
  {
    path: 'ligneCheck/:ligneChecklistId/posages/add',
    component: AddPosageComponent,
  },
  {
    path: 'ligneCheck/:ligneChecklistId/posages/edit/:id',
    component: AddPosageComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }


