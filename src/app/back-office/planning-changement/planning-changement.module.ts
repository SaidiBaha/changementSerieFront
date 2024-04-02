import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningChangementRoutingModule } from './planning-changement-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { ChangementDetailsComponent } from './changement-details/changement-details.component';
import { ChangementinfoComponent } from './changementinfo/changementinfo.component';


@NgModule({
  declarations: [
    PlanningComponent,
    AddChangementComponent,
    NotificationDetailsComponent,
    ChangementDetailsComponent,
    ChangementinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanningChangementRoutingModule
  ]
})
export class PlanningChangementModule { }
