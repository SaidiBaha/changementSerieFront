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
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'listcheck',
    component: ListChecklistComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'addCheck',
    component: AddChecklistComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'addCheck/:id',
    component: AddChecklistComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'ligneCheck/:checklistId',
    component: LigneCheckComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'ligneCheck/:checklistId/add',
    component: AddLigneCheckComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'ligneCheck/:checklistId/edit/:id',
    component: AddLigneCheckComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'checklistDetails/:id',
    component: ChecklistDetailsComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'listPosage',
    component: ListPosageComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'list/:ligneChecklistId',
    component: ListPosageComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'addPosage',
    component: AddPosageComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'listcheckComplete',
    component: ListCecklistCompleteComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },

  {
    path: 'remlirCheck/:checklistId',
    component: AddChecklistCompleteComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'listcheckVal1/:id',
    component: ListChecklistCompleteValidation1Component,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'addChecklistVal2/:checklistCompleteeId/:checklistId',
    component: AddChecklistCompleteValidation2Component,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'checklistRemplirDetails',
    component: ChecklistRemplirDetailsComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },

  

 /* {
    path: 'ligneCheck/:ligneChecklistId/posages',
    component: ListPosageComponent,
  },*/
  {
    path: 'ligneCheck/:ligneChecklistId/posages/add',
    component: AddPosageComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'ligneCheck/:ligneChecklistId/posages/edit/:id',
    component: AddPosageComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }


