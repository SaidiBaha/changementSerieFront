import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';
import { ChangementDetailsComponent } from './changement-details/changement-details.component';
import { ChangementinfoComponent } from './changementinfo/changementinfo.component';

const routes: Routes = [

  {
    path: 'planning',
    component: PlanningComponent,
  },
  {
    path: 'addPlanning',
    component: AddChangementComponent,
  },
  {
    path: 'changementDetails',
    component: ChangementDetailsComponent,
  },
  {
    path: 'changementInfo/:id',
    component: ChangementinfoComponent,
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningChangementRoutingModule { }
