import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';
import { ChangementDetailsComponent } from './changement-details/changement-details.component';
import { ChangementinfoComponent } from './changementinfo/changementinfo.component';
import { ChartChangementSerieComponent } from './chart-changement-serie/chart-changement-serie.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {
    path: 'planning',
    component: PlanningComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER','METHODE'] }
  },
  {
    path: 'addPlanning',
    component: AddChangementComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['METHODE','ADMIN'] }
  },
  {
    path: 'changementDetails',
    component: ChangementDetailsComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER', 'METHODE'] }
  },
  {
    path: 'changementInfo/:id',
    component: ChangementinfoComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER','METHODE'] }
  },
  {
    path: 'chart/:id',
    component: ChartChangementSerieComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER','METHODE'] }
  },
  {
    path: 'planning-calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER','METHODE'] }
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningChangementRoutingModule { }
