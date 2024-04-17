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
    path: 'remlirCheck',
    component: AddChecklistCompleteComponent,
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


