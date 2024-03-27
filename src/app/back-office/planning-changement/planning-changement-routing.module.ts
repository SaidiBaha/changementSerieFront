import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';

const routes: Routes = [

  {
    path: 'planning',
    component: PlanningComponent,
  },
  {
    path: 'addPlanning',
    component: AddChangementComponent,
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningChangementRoutingModule { }
