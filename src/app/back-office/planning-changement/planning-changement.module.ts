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
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    PlanningComponent,
    AddChangementComponent,
    NotificationDetailsComponent,
    ChangementDetailsComponent,
    ChangementinfoComponent,
    ChartChangementSerieComponent,
    ProgressChangementComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule, 
    MatTableModule,
    MatDatepickerModule, 
    MatNativeDateModule, // Ajouté
    MatInputModule, // Ajouté
    MatFormFieldModule, 
    ReactiveFormsModule,
   
    PlanningChangementRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlanningChangementModule { }
