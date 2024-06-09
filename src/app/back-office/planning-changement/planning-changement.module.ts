import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningChangementRoutingModule } from './planning-changement-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { ChangementDetailsComponent } from './changement-details/changement-details.component';
import { ChangementinfoComponent } from './changementinfo/changementinfo.component';
import { ChartChangementSerieComponent } from './chart-changement-serie/chart-changement-serie.component';
import { ProgressChangementComponent } from './progress-changement/progress-changement.component';



@NgModule({
  declarations: [
    PlanningComponent,
    AddChangementComponent,
    NotificationDetailsComponent,
    ChangementDetailsComponent,
    ChangementinfoComponent,
    ChartChangementSerieComponent,
    ProgressChangementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
    PlanningChangementRoutingModule
  ]
})
export class PlanningChangementModule { }
