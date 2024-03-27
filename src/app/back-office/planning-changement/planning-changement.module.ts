import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningChangementRoutingModule } from './planning-changement-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { AddChangementComponent } from './add-changement/add-changement.component';


@NgModule({
  declarations: [
    PlanningComponent,
    AddChangementComponent
  ],
  imports: [
    CommonModule,
    PlanningChangementRoutingModule
  ]
})
export class PlanningChangementModule { }
